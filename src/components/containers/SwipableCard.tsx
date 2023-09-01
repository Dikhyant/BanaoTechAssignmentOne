import {
    View,
    StyleSheet,
    Image,
    Animated,
    GestureResponderEvent,
    PanResponder,
    PanResponderGestureState,
    useWindowDimensions
} from "react-native";
import {
    FC,
    useState,
    useRef
} from "react";

const crossMark = require('../../assets/images/cross-mark.png');
const greenTick = require('../../assets/images/green-tick.png');

type Props = {
    children: string | JSX.Element | JSX.Element[],
    OnPanResponderMove?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void,
    swipeNormalized: Animated.Value
}

const styles = StyleSheet.create({
    swipableCard: {
        width: "90%",
        position: "absolute",
        transform: [
            {scale: 1}
        ]
        // height: "auto",
        // backgroundColor: "#000000"
    },
    iconContainer: {
        position: "absolute",
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
        opacity: 0
    }
})

const SwipableCard: FC<Props> = ({children, OnPanResponderMove, swipeNormalized}) => {
    console.log("Swipable Card");
    const pan = useState(new Animated.Value(0))[0];
    const {width} = useWindowDimensions();
    const swipeThreshold: number = width / 2.0 * 0.7; // how much user can swipe until the card goes off screen

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            if(OnPanResponderMove)  OnPanResponderMove(e, gestureState);
            // console.log(gestureState.dx);
            // pan.setValue(gestureState.dx);
            if(Math.abs(gestureState.dx / swipeThreshold) <= 1) {
                swipeNormalized.setValue(gestureState.dx / swipeThreshold);
            }
            // swipeNormalized.setValue(gestureState.dx);
        },
        onPanResponderRelease: (e, gestureState) => {
            console.log(gestureState.dx);
            if(Math.abs(gestureState.dx / swipeThreshold) <= 1) {
                Animated.spring(swipeNormalized, {
                    useNativeDriver: true,
                    toValue: 0
                }).start();
                return;
            }
            Animated.timing(swipeNormalized, {
                useNativeDriver: true,
                toValue: gestureState.dx / Math.abs(gestureState.dx) * 5
            }).start();
        },
    });


    return (
        <Animated.View 
        {...panResponder.panHandlers}
        style={[styles.swipableCard, {
            transform: [
                {translateX: swipeNormalized.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [-200, 200]
                })},
                {
                    rotateZ: swipeNormalized.interpolate({
                        inputRange: [-1, 1],
                        outputRange: ["-30deg", "30deg"]
                    })
                }
            ]
        }]}
        >
            {children}
            <View style={[styles.iconContainer]}>
                <Animated.Image 
                source={greenTick} 
                style={
                    [
                        styles.icon,
                        {
                            opacity: swipeNormalized.interpolate({
                                inputRange: [-1, 0, 1],
                                outputRange: [0, 0, 1]
                            })
                        }
                ]} />
                <Animated.Image 
                source={crossMark} 
                style={
                    [
                        styles.icon, 
                        {
                            opacity: swipeNormalized.interpolate({
                                inputRange: [-1,0, 1],
                                outputRange: [1,0, 0]
                })}]} />
            </View>
        </Animated.View>
    )
}

export default SwipableCard;