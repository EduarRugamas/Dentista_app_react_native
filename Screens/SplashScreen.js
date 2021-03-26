import React,{Component} from 'react'
import {View,Text, StyleSheet} from 'react-native';



class SplashScreen extends Component{
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount() {
        setTimeout(()=>{
            this.goToScreen('Home')
        },3000,this)
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Splash Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default SplashScreen
