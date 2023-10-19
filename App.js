import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.topo}>LISTAS</Text>

      </View>

      <View style={styles.lista}>

        <View style={[styles.box1, { backgroundColor: '#FFA4A4' }]}>
          <Text style={[styles.box, { color: '#C62222' }]}>Animais</Text>
        </View>

        <View style={[styles.box1, { backgroundColor: '#EDA4FF' }]}>
          <Text style={[styles.box, { color: '#7422C6' }]}>carros</Text>
        </View>

        <View style={[styles.box1, { backgroundColor: '#A4D4FF' }]}>
          <Text style={[styles.box, { color: '#2277C6' }]}>Peixe</Text>
        </View>

        <View style={[styles.box1, { backgroundColor: '#A4FFC3' }]}>
          <Text style={[styles.box, { color: '#22C646' }]}>Times</Text>
        </View>

        <View style={[styles.box1, { backgroundColor: '#D1D6D3' }]}>
          <Text style={[styles.box, { color: '#434A44' }]}>Filmes</Text>
        </View>

        <View style={[styles.box1, { backgroundColor: '#E8EFBD' }]}>
          <Text style={[styles.box, { color: '#747D10' }]}>Linguagem</Text>
        </View>


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
  },
  box1: {
    alignItems: 'center',
    paddingVertical: 15,
    margin:6
  },
  box: {
    paddingVertical: 20,
    fontWeight: 'bold',
    fontSize: 25,
  }



});
