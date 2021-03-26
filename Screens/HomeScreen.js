import React,{Component} from 'react'
import {View,Text, StyleSheet} from 'react-native';


class HomeScreen extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Home Screens</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{

    }
});
export default HomeScreen
