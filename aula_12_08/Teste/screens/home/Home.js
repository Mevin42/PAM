import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './Estilos';
import { realizarCalculo } from './Funcoe';

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  function calcular() {
    realizarCalculo(numero1, numero2, operacao, setResultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.operacoes}>
        {['+', '-', '*', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.botao}
            onPress={() => setOperacao(item)}
          >
            <Text style={styles.textoBotao}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.operacaoSelecionada}>
        Operação: {operacao}
      </Text>

      <TouchableOpacity style={styles.botaoCalcular} onPress={calcular}>
        <Text style={styles.textoCalcular}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>
    </View>
  );
}
