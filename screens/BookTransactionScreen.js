import * as React from 'react';
import { View, Text } from 'react-native';
export default class BookTransactionScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>
                    Issue  or return
                </Text>
             </View>
        )
    }
}