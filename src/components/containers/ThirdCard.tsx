import {
    Animated,
    StyleSheet,
    useWindowDimensions
} from "react-native";
import {
    FC
} from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[],
    swipeNormalized: Animated.Value
}

const styles = StyleSheet.create({
    thirdCard: {
        position: "absolute",
        width: "100%",
        height: "auto",
    }
})

const ThirdCard:FC<Props> = ({children, swipeNormalized}) => {
    const {height} = useWindowDimensions();

    const initialTranslateY: number = height * 0.12;
    const finalTranslateY: number = height * 0.06;

    const initialScaleValue: number = 0.7;
    const finalScaleValue: number = 0.8;
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