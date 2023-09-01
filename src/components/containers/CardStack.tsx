import {
    Animated,
    GestureResponderEvent,
    PanResponderGestureState,
    View,
    StyleSheet
} from "react-native";
import {
    FC, useState
} from "react";
import SwipableCard from "./SwipableCard";
import Card from "../widgets/Card";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";

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
    const [cardInfoList, setCardInfoList] = useState([
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        }
    ]);

    const swipeNormalized = useState(new Animated.Value(0))[0];

    const OnPanResponderMove = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        // console.log(gestureState.dx);
    }

    const cards = cardInfoList.map((item, index) => {
        if(index == 0) {
            return (
                <SwipableCard key={item.id} OnPanResponderMove={OnPanResponderMove} swipeNormalized={swipeNormalized}>
                    <Card />
                </SwipableCard>
            )
        }
        if(index == 1) {
            return (
                <SecondCard key={item.id} swipeNormalized={swipeNormalized}>
                    <Card />
                </SecondCard>
            )
        }
        if(index == 2) {
            return (
                <ThirdCard key={item.id} swipeNormalized={swipeNormalized}>
                    <Card />
                </ThirdCard>
            )
        }
        if(index == 3) {
            return (
                <FourthCard key={item.id}>
                    <Card />
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