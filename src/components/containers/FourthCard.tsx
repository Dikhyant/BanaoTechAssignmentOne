import {
    View,
    StyleSheet,
    useWindowDimensions
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
    const {height} = useWindowDimensions();
    return (
        <View 
        style={[
            styles.fourthCard, 
            {
                transform: [
                    {translateY: height * 0.12},
                    {scale: 0.7}
                ]
            }
        ]}>
            {children}
        </View>
    )
}

export default FourthCard;