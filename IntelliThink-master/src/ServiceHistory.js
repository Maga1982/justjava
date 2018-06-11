import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class ServiceHistory extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
        <Image
            source={require('./src/images/loginLogo.jpg')}
            style={{width:98, height:22}}
          />
          <View style={styles.rightNav}>
          <TouchableOpacity>
          <Icon name="search" size={25} style={styles.navItem}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="account-circle" size={25} style={styles.navItem}/>
          </TouchableOpacity>         
          </View>
          </View> 
          <View style={styles.body}></View>
          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.navTitle}>Home</Text>
             </TouchableOpacity>  
             <TouchableOpacity style={styles.tabItem}>
            <Icon name="schedule" size={25} />
            <Text style={styles.navTitle}>Add complaint</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.tabItem}>
            <Icon name="directions" size={25} />
            <Text style={styles.navTitle}>Track</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.tabItem}>
            <Icon name="settings" size={25} />
            <Text style={styles.navTitle}>Settings</Text>
             </TouchableOpacity>
          </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { m  
    flex: 1,
   
  },
    navBar:{
      height : 55,
      backgroundColor : 'white',
      elevation: 3,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
    },
    rightNav:{
      flexDirection: 'row',
    },
    navItem:{
      marginLeft: 25,
    },
    body:{
      flex:1
    },
    tabBar: {
      backgroundColor: 'white',
      height: 60,
      borderTopWidth: 0.5,
      borderColor: '#E5E5E5',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabTitle:{
      fontSize:11 ,
      color: '#3c3c3c',
    },
});
