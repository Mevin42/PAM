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
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function fazerCadastro() {
    const resultado = cadastrarUsuario(usuario, senha, confirmarSenha);

    if (!resultado.sucesso) {
      Alert.alert('Atenção', resultado.mensagem);
      return;
    }

    Alert.alert('Cadastro realizado!', 'Agora você pode fazer login.', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login')
      }
    ]);
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
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
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
