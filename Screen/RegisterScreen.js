'use strict';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Component} from 'react';
import {StackNavigator, getParam} from 'react-navigation';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullName: '',
      address: '',
      phone: '',
      email: '',
    };
    this.register = this.register.bind(this);
  }
  register = () => {
    if (this.state.username != '') {
      if (this.state.password != '') {
        if (this.state.fullName != '') {
          if (this.state.address != '') {
            if (this.state.phone != '') {
              console.log(this.state.username);
              fetch('http://localhost:8888/api/user', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username: this.state.username,
                  password: this.state.password,
                  adress: this.state.address,
                  phone: this.state.phone,
                  fullName: this.state.fullName,
                }),
              })
                .then((res) => res.json())
                .then((res1) => {
                  console.log(res1);
                  // alert(res1.message);
                  if (res1.status === 1) {
                    alert(res1.message);
                    this.props.navigation.popToTop();
                  } else {
                    alert(res1.message);
                  }
                })
                .catch((err) => {
                  console.log(err);
                  alert(err);
                });
            } else {
              alert('Hãy nhập số điện thoại');
            }
          } else {
            alert('Hãy nhập địa chỉ');
          }
        } else {
          alert('Hãy nhập họ tên');
        }
      } else {
        alert('Hãy nhập mât khẩu');
      }
    } else {
      alert('Hãy nhập tài khoản');
    }
  };
  render() {
    console.log(this.props.route.params);
    return (
      <View style={{flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Image/99coffee.png')}
              style={styles.img}
            />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="gray"
                value={this.state.username}
                onChangeText={(username) => this.setState({username: username})}
                placeholder="Enter UserName"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                secureTextEntry={true}
                underlineColorAndroid="gray"
                value={this.state.password}
                onChangeText={(password) => this.setState({password: password})}
                placeholder="Enter Password"
                keyboardType="default"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="gray"
                value={this.state.fullName}
                onChangeText={(fullName) => this.setState({fullName: fullName})}
                placeholder="Enter Full Name"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="gray"
                value={this.state.address}
                onChangeText={(address) => this.setState({address: address})}
                placeholder="Enter Address"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="gray"
                value={this.state.phone}
                onChangeText={(phone) => this.setState({phone: phone})}
                placeholder="Enter Phone"
                keyboardType="numeric"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.register}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: 'black',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  img: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 25,
  },
});
