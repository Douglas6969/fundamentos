import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

export function Box(props) {
    return (
        <View style={[styles.box1, { backgroundColor: props.corFundo }]}>
            <Text style={[styles.box, { color: props.corLetra }]}>{props.texto}</Text>
        </View>
    )
}
