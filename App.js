import { StyleSheet, Text, View } from 'react-native';
import { Box } from './components/box';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.topo}>LISTAS</Text>

      </View>

      <View style={styles.lista}>

        <Box corFundo='#FFA4A4' corLetra='#C62222' texto='Animais' />
        <Box corFundo='#EDA4FF' corLetra='#7422C6' texto='Caros' />
        <Box corFundo='#A4D4FF' corLetra='#2277C6' texto='Peixe' />
        <Box corFundo='#A4FFC3' corLetra='#22C646' texto='Times' />
        <Box corFundo='#D1D6D3' corLetra='#434A44' texto='Filmes' />
        <Box corFundo='#E8EFBD' corLetra='#747D10' texto='Linguagem' />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2A9F91',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  topo: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffff'
  },
  lista: {
    padding: 10,
    width: '100%'
  }
});
