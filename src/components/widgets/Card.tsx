import { 
    View,
    StyleSheet,
    useWindowDimensions
 } from "react-native";

 import {
    FC
 } from "react";

 import {
    useSelector
 } from "react-redux";
import { RootState } from "../../redux/rootReducer";

 const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: undefined,
        aspectRatio: 326 / 500,
        // backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1 )`,
        borderRadius: 10,
        overflow: "hidden"
    },
    iconContainer: {
        width: "100%",
        height: "22.8%",
        paddingLeft: "3%",
        paddingRight: "3%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "#5a5656"
    },
    icon: {
        width: undefined,
        height: "85%",
        aspectRatio: 1,
    }
 })

 type Props = {
    id: string
 }

const Card:FC<Props> = ({id}) => {
    const {width} = useWindowDimensions();
    const state = useSelector((state: RootState) => state.reducer);
    const backgroundColor:string = state.storeItems.find(item => item.id === id).backgroundColor;
    return (
        <View style={{
            ...styles.card,
            backgroundColor: backgroundColor
            // width: width * 0.7
        }}>
            {/* <View style={styles.iconContainer}>
                <Image source={greenTick} style={styles.icon} />
                <Image source={crossMark} style={styles.icon} />
            </View> */}
        </View>
    )
}

export default Card;