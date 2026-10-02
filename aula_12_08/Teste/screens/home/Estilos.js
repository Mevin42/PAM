import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
  },
  operacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 6,
    minWidth: 55,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  operacaoSelecionada: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  },
  botaoCalcular: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoCalcular: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 25,
    fontWeight: 'bold',
  },
});

export default styles;
