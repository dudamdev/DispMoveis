import React, { useState } from 'react';
import { View, Alert, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (!user) {
        Alert.alert('Aviso', 'Usuário não encontrado!');
        return;
      }
      const userObj = JSON.parse(user);
      if (userObj.email === email && userObj.password === password) {
        Alert.alert('Sucesso', 'Usuário logado com sucesso!');
        navigation.navigate('Books');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        inputMode="email"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    color: '#999999',
    borderColor: '#9FC131',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '90%',
  },
  placeholder: {
    color: '#9eb1bb',
  },
  button: {
    backgroundColor: '#005C53',
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});