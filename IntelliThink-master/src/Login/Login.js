import React from 'react';
import { StyleSheet, Text,TextInput, View, Image,TouchableOpacity,Button,KeyboardAvoidingView} from 'react-native';

export default class Login extends React.Component {
  static navigationOptions = {
    header:null
  }

  render() {
    //const{navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.Logo}
            source={require('../images/loginLogo.jpg')}
          />
        </View>
        <View style={styles.formContainer}>
        <TextInput
          placeholder="Username or Email"
          returnKeyType="next"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)" 
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity >
          <Button style={styles.buttonText}
            title = "LOGIN"
            onPress={
               ()=> this.props.navigation.navigate('dashboard')
               
            }
          />
        </TouchableOpacity>
        </View>  

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo:{
    width: 300,
    height: 300
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }, 
  formContainer:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 300,
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: "#FFFF",
    paddingHorizontal: 10
  },
  buttonText:{

    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
 
});
