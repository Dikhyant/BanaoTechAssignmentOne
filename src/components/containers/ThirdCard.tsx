import {
    Animated,
    View,
    StyleSheet,
    AnimatableNumericValue,
    useAnimatedValue
} from "react-native";
import {
    FC
} from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[],
    swipeNormalized: Animated.Value
}

const initialTranslateY: number = 85;
const finalTranslateY: number = 40;

const initialScaleValue: number = 0.7;
const finalScaleValue: number = 0.8;

const styles = StyleSheet.create({
    thirdCard: {
        position: "absolute",
        width: "100%",
        height: "auto",
        transform: [
            {translateY: initialTranslateY},
        ]
    }
})

const ThirdCard:FC<Props> = ({children, swipeNormalized}) => {
    return (
        <Animated.View 
        style={[
            styles.thirdCard,
            {
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
        ]}>
            {children}
        </Animated.View>
    )
}

export default ThirdCard;