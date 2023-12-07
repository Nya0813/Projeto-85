import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    KeyboardAvoidingView,
  } from "react-native";
  import firebase from "firebase";
  
  export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        email: firebase.auth().currentUser.email
      };
    }
}
   getTransactions = email =>{
    db.collection("transactions")
    .where("email_id", "==", email)
    .limit(10)
   }

   checkUserEligibilityForStartRide = async (userId, email) => {
    const userRef = await db
    .collection("users")
    .where("id", "==", userId)
    .get();
   }
    handleLogin = (email, password) => {
        //Adicionar código para autenticação do Firebase
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.props.navigation.navigate("BottomTabNavigator");
          });
         
        }