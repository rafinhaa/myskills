import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

export function Button({onPress}) {
    /*
      * onPress: function = handleAddNewSkill
    */

    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.6}
            onPress={onPress} 
        >
            <Text style={styles.buttonText}>Adicionar</Text>
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