import React from "react";
import { ScrollView ,Text } from "react-native";

const User = ({name} : {name : string}) => {
    return (
        <ScrollView>
            <Text style={{fontSize : 20}} > Hello World {name} </Text>
        </ScrollView>
    )
}

export default User;