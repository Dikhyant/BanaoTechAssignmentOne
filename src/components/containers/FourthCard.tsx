import {
    View,
    StyleSheet
} from "react-native";
import {
    FC
} from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[],
}

const styles = StyleSheet.create({
    fourthCard: {
        position: "absolute",
        width: "100%",
        height: "auto",
    }
})

const FourthCard:FC<Props> = ({children}) => {
    return (
        <View 
        style={[
            styles.fourthCard, 
            {
                transform: [
                    {translateY: 85},
                    {scale: 0.7}
                ]
            }
        ]}>
            {children}
        </View>
    )
}

export default FourthCard;