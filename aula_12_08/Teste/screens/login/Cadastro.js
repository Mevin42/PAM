import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

import styles from './Estilos';
import { cadastrarUsuario } from './Funcoe';

export default function Cadastro({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [cSenha, setCSenha] = useState('');

  function fazerCadastro() {
    const resultado = cadastrarUsuario(usuario, senha, cSenha);

    if (!resultado.sucesso) {
      Alert.alert('Atenção', resultado.mensagem);
      return;
    }

    Alert.alert(
      'Cadastro realizado!',
      'Sua conta foi criada com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => navigation.replace('Login')
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar conta</Text>

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

      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        placeholder="Digite a senha novamente"
        style={styles.input}
        value={cSenha}
        onChangeText={setCSenha}
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={fazerCadastro} />

      <View style={{ marginTop: 15 }}>
        <Button
          title="Voltar para o Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}
