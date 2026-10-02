import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert
} from 'react-native';

import styles from './Estilos';
import { verificarLogin } from './Funcoe';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin() {
    if (verificarLogin(usuario, senha)) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos!');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Login</Text>

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        placeholder="Digite seu usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Entrar" onPress={fazerLogin} />

      <View style={{ marginTop: 15 }}>
        <Button
          title="Criar uma conta"
          onPress={() => navigation.navigate('Cadastro')}
        />
      </View>
    </View>
  );
}
