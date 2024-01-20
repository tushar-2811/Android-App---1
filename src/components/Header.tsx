import React from "react";
import { ScrollView, Text } from "react-native";

const Header = (): React.JSX.Element => {
    return (
        <ScrollView>
            <Text style={{
                backgroundColor : "black",
                color : "white",
                fontSize : 30,
                fontFamily : ""
            }} > Header component </Text>
        </ScrollView>
    )
}


export default Header;