import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './Estilos';
import { rolarDado } from './Funcoe';

const dados = [4, 6, 8, 10, 12, 20, 100];

export default function Home() {
  const [dadoSelecionado, setDadoSelecionado] = useState(20);
  const [resultado, setResultado] = useState(null);

  function rolar() {
    const valor = rolarDado(dadoSelecionado);
    setResultado(valor);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Rolador de Dados</Text>
      <Text style={styles.subtitulo}>Escolha um dado</Text>

      <View style={styles.dados}>
        {dados.map((dado) => (
          <TouchableOpacity
            key={dado}
            style={[
              styles.botaoDado,
              dadoSelecionado === dado && styles.botaoDadoSelecionado
            ]}
            onPress={() => {
              setDadoSelecionado(dado);
              setResultado(null);
            }}
          >
            <Text
              style={[
                styles.textoDado,
                dadoSelecionado === dado && styles.textoDadoSelecionado
              ]}
            >
              D{dado}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.selecionado}>
        D{dadoSelecionado} selecionado
      </Text>

      <TouchableOpacity style={styles.botaoRolar} onPress={rolar}>
        <Text style={styles.textoRolar}>ROLAR D{dadoSelecionado}</Text>
      </TouchableOpacity>

      <View style={styles.resultadoBox}>
        <Text style={styles.resultadoLabel}>RESULTADO</Text>
        <Text style={styles.resultado}>
          {resultado === null ? '?' : resultado}
        </Text>
      </View>

    </ScrollView>
  );
}
