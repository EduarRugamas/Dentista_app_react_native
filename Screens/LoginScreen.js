import React,{Component} from 'react'
import {View,Text, StyleSheet} from 'react-native';


class LoginScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Login Screens</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{

    }
});
export default LoginScreen
