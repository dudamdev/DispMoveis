import React, { useState } from 'react';
import { View, Alert, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async () => {
    try {
      if (!name || !phone || !email || !password) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }

      const user = { name, phone, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('LogIn');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Salvar</Text>
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
    marginVertical: 8,
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
