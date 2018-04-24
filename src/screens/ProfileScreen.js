import React, { Component } from 'react';
import {
  Alert,
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { MapView, ImagePicker } from 'expo';
import {  Avatar, Icon, Header, SearchBar, Button, Rating } from 'react-native-elements'; // 0.19.0
import { connect } from "react-redux";
import * as actions from "../actions";
import "@expo/vector-icons"; // 6.2.2

class ProfileScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
  static navigationOptions = ({ navigation }) => ({
    //tabBarVisible: false,
    title: "Profile",
    tabBarLabel: "Profile",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    
    headerLeft: (
      <Button
        navigate={navigation.navigate}
        medium
        icon={{ name: "menu" }}
        backgroundColor='#000'
        onPress={() => navigation.navigate("DrawerOpen")}
      />
    ),
    drawerIcon: ({ tintColor }) => (
      <Icon type="entypo" name="user" size={25} color={tintColor} />
    )
  });
  
    _handleButtonPress = () => {
    Alert.alert('Your request has been sent');
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
    state = {
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
  }
  render() {
    const remote = 'https://i.pinimg.com/originals/8b/34/ed/8b34edac1a92ed12d9592a3d460ed6af.jpg';
    const resizeMode = 'cover';
    const text = 'Mandrell Worthy';
    const text1 = 'Seattle WA';
    const text2 = 'Basketball Player';
    const text3 = 'mworthy16@apu.edu';
    const email = 'Email: ';
    const occupant = 'Occupation: ';
  let { image } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
          paddingTop: 20,
        }}
      >
       <ImageBackground
            style={{
              resizeMode,
              paddingTop:20,
              paddingBottom:20,
            }}
            blurRadius= {1}
            source={{ uri: remote }}
          >
        <View
          style={{
            alignItems: 'center',
            elevation: 1,
            marginTop: -1,
          }}
        >
         
          <View style={ styles.viewStyle }>
          {image &&
            <Avatar
              xlarge
              rounded
              icon={{ name: 'camera-alt' }}
              source={{ uri: image }}               
              onPress={this._pickImage}
          />
          }
          </View>
      <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 22,
              fontStyle: 'bold',
              paddingBottom: 8,
            }}
          >
            {text}
          </Text>
           <View
           
          style={{
            backgroundColor: 'transparent',
            alignItems: 'center',
    flexDirection: 'row',
          }}>
          <View>
          <Icon
          name="place"
          underlayColor="transparent"
          style={{
            color: 'black',
    fontSize: 26,
            paddingTop: 20,
          }}
    />
    </View>
          
          <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '600',
           textAlign: 'center',
          }}>
          {text1}
          </Text>
        </View>
      
        
        </View>
        </ImageBackground>
         <View
           style={{
           backgroundColor: '#FFF',
           flex: 1,
          }}>
          
          <Rating
          showRating
          type="star"
          fractions={1}
          startingValue={1.5}
          imageSize={50}
          onFinishRating={this.ratingCompleted}
          style={{ paddingVertical: 1,alignSelf: "center" }}
        />
        </View>
         <View
          style={{
            backgroundColor: 'transparent',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View>
          <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: '600',
           textAlign: 'center',
          }}>
          {occupant}
          </Text>
         </View>
          <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: '600',
           textAlign: 'center',
           justifyContent: 'space-between',
          }}>
          {text2}
          </Text>
        </View>
          <View
          style={{
            backgroundColor: 'transparent',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
    <View>
        <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: '1000',
           textAlign: 'top',
          }}>
          {email}
          </Text>
    </View>
          <Text
          style={{
            color: 'black',
            fontSize: 25,
            fontWeight: '1000',
           textAlign: 'top',
           justifyContent: 'space-between',
          }}>
          {text3}
          </Text>
        </View>
      <View
          style={{
          backgroundColor: '#FFF',
          flex: 1,
          paddingTop: 30,
          }}>
      <Button
        rounded
        backgroundColor="#03A9F4"
        title="Propose a SwapUp"
        onPress={this._handleButtonPress}  
      />
      </View>
        </View>
    );
  }
}
const styles = {
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  }
};

export default connect(null, actions)(ProfileScreen);

