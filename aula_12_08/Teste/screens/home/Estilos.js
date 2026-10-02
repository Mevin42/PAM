import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  dados: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },
  botaoDado: {
    width: 70,
    height: 55,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  botaoDadoSelecionado: {
    backgroundColor: '#222',
    borderColor: '#222',
  },
  textoDado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  textoDadoSelecionado: {
    color: '#fff',
  },
  selecionado: {
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 15,
  },
  botaoRolar: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoRolar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoBox: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
  },
  resultadoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultado: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  historicoBox: {
    marginTop: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
  },
  historicoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  historicoItem: {
    fontSize: 16,
    paddingVertical: 3,
  },
});

export default styles;
