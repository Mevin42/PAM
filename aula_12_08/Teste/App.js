import { View, Text, FlatList, StyleSheet } from 'react-native';

import styles from './Estilos';

export default function Home({ navigation }) {

  const uuu = [
    { id: '1', nome: 'Skundler' },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.subtitulo}>Lista de usuarios:</Text>

      <FlatList
      data={usuarios}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
             <Text style={styles.nome}>{item.nome}</Text>
        </View>
      )}
      />
    </View>
    )
}