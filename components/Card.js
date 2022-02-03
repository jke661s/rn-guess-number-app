import { View, StyleSheet } from "react-native";

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 6,
        shadowOpacity: 1,
        backgroundColor: "white",
        // Shadow only works for iOS, for Android, we need to use elevation, which implements default material design shadow..
        elevation: 5,
        padding: 20,
        borderRadius: 15
    },
});

export default Card;