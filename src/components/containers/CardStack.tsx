import {
    Animated,
    View,
    StyleSheet
} from "react-native";

import {
    FC, useState
} from "react";

import {
    useSelector,
} from "react-redux";

import SwipableCard from "./SwipableCard";
import Card from "../widgets/Card";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import { RootState } from "../../redux/rootReducer";

const styles = StyleSheet.create({
    cardStack: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#000"
    }
})

const CardStack:FC = () => {
    const cardInfoList = useSelector((store: RootState) => {
        return store.reducer.storeItems
    })

    const swipeNormalized = useState(new Animated.Value(0))[0];

    const cards = cardInfoList?.map((item, index) => {
        if(index == 0) {
            return (
                <SwipableCard id={item.id} key={item.id} swipeNormalized={swipeNormalized}>
                    <Card id={item.id} />
                </SwipableCard>
            )
        }
        if(index == 1) {
            return (
                <SecondCard key={item.id} swipeNormalized={swipeNormalized}>
                    <Card id={item.id} />
                </SecondCard>
            )
        }
        if(index == 2) {
            return (
                <ThirdCard key={item.id} swipeNormalized={swipeNormalized}>
                    <Card id={item.id} />
                </ThirdCard>
            )
        }
        if(index == 3) {
            return (
                <FourthCard key={item.id}>
                    <Card id={item.id} />
                </FourthCard>
            )
        }
        return (
            null
        )
    }).reverse();

    return (
        <View style={styles.cardStack}>
            {cards}
        </View>
    )
}

export default CardStack;