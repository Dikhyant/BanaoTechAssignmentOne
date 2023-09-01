import {
    Animated,
    View,
    StyleSheet,
    PanResponder
} from "react-native";
import {
    FC
} from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[],
    swipeNormalized: Animated.Value
}

const initialTranslateY: number = 45;
const finalTranslateY: number = 0;

const initialScaleValue: number = 0.8;
const finalScaleValue: number = 0.9;

const styles = StyleSheet.create({
    secondCard: {
        position: "absolute",
        width: "100%",
        height: "auto",
        transform: [
            {translateY: initialTranslateY},
        ]
    }
})

const SecondCard:FC<Props> = ({children, swipeNormalized}) => {
    
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            
        }
    });
    return (
        <Animated.View 
        {...panResponder.panHandlers}
        style={[
            styles.secondCard,
            {
                // width: swipeNormalized.interpolate({
                //     inputRange: [-1, 0, 1],
                //     outputRange: ["90%", "80%", "90%"]
                // }),
                transform: [
                    {translateY: swipeNormalized.interpolate({
                        inputRange: [-100, -1, 0, 1, 100],
                        outputRange: [finalTranslateY, finalTranslateY, initialTranslateY, finalTranslateY, finalTranslateY]
                    })},
                    {scale: swipeNormalized.interpolate({
                        inputRange: [-100, -1, 0, 1, 100],
                        outputRange: [finalScaleValue, finalScaleValue, initialScaleValue, finalScaleValue, finalScaleValue]
                    })}
                ]
            }
        ]}
        >
            {children}
        </Animated.View>
    )
}

export default SecondCard;