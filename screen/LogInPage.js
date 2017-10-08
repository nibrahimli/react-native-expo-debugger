import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';


const LogInPage = ({email, setEmail, password, setPassword, logged, logInApp, logOutApp}) =>
							logged ?
								(<View style={styles.container}>
									<Text>You are successfully logged</Text>
									<Button
									  onPress={() => logOutApp()}
									  title="Log Out"
									  color="#841584"
									  accessibilityLabel="Log"
									/>
								</View>)
							:												 
							 (<View style={styles.container}>
							 	 	<TextInput  style={{width: 150}} placeholder="email" value={email} onChangeText={email => setEmail(email)}/>
								 	<TextInput  secureTextEntry={true} style={{width: 150}} placeholder="password" value={password} onChangeText={password => setPassword(password)}/>								 	
								 	<Button
									  onPress={() => logInApp()}
									  title="Log In"
									  color="#841584"
									  accessibilityLabel="Log"
									/>							
							 </View>);
							



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default LogInPage;