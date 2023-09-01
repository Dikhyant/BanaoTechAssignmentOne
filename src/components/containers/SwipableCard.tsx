import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    useWindowDimensions
} from "react-native";

import {
    FC,
    useState,
    useRef
} from "react";

import {
    useDispatch
} from "react-redux";
import { deleteData } from "../../redux/action";

const crossMark = require('../../assets/images/cross-mark.png');
const greenTick = require('../../assets/images/green-tick.png');

type Props = {
    children: string | JSX.Element | JSX.Element[],
    swipeNormalized: Animated.Value,
    id: string
}

const styles = StyleSheet.create({
    swipableCard: {
        width: "90%",
        position: "absolute",
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

const SwipableCard: FC<Props> = ({id, children,swipeNormalized}) => {
    const dispatch = useDispatch();
    const pan = useState(new Animated.Value(0))[0];
    const {width} = useWindowDimensions();
    const swipeThreshold: number = width / 2.0 * 0.7; // how much user can swipe until the card goes off screen

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            if(Math.abs(gestureState.dx / swipeThreshold) <= 1) {
                swipeNormalized.setValue(gestureState.dx / swipeThreshold);
            }
        },
        onPanResponderRelease: (e, gestureState) => {
            if(Math.abs(gestureState.dx / swipeThreshold) <= 1) {
                Animated.spring(swipeNormalized, {
                    useNativeDriver: true,
                    toValue: 0
                }).start();
                return;
            }
            Animated.timing(swipeNormalized, {
                useNativeDriver: true,
                toValue: gestureState.dx / Math.abs(gestureState.dx) * 3,
                duration: 200
            }).start(() => {
                dispatch(deleteData(id))
                swipeNormalized.setValue(0);
            });
            
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