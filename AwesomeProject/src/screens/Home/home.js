import React from 'react'
import { Text, View, Button } from 'react-native'

export default function home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screennn</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')} ></Button>


        </View>



    )
}
