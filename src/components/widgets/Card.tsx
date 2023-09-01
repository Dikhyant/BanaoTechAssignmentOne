import { 
    View,
    Image,
    StyleSheet,
    useWindowDimensions
 } from "react-native";

 const crossMark = require('../../assets/images/cross-mark.png');
 const greenTick = require('../../assets/images/green-tick.png');


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

export default function Card() {
    const {width} = useWindowDimensions();
    return (
        <View style={{
            ...styles.card,
            backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1 )`
            // width: width * 0.7
        }}>
            {/* <View style={styles.iconContainer}>
                <Image source={greenTick} style={styles.icon} />
                <Image source={crossMark} style={styles.icon} />
            </View> */}
        </View>
    )
}