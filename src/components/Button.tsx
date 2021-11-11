import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet,
} from "react-native";

// ButtonProps vai ter todas as propriedades do TouchableOpacity e as propriedades que eu definir
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title,...rest}: ButtonProps) {
    /*
      * onPress: function = handleAddNewSkill
    */

    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.6}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A370F7",
        padding: 15,
        borderRadius: 7,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});