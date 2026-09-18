import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';

import syles from './Estilos';
import { verificarLogin } from '.Funcoe';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Erro',
        'Usuário ou senha incorretos!'
      );
    }
  }

  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      
      />
        
        <text style={styles.titulo}>Login</text>

        <text style={styles.label}>Usuários</text>

        <TextInput
        placeholder="'
      

      <Text>Digite o E-mail</Text>
      <TextInput placeholder="fulano@hotmail.com" />

      <Text>Digite a senha</Text>
      <TextInput placeholder="abc@123" />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}