import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Nossa dor vem da distância entre aquilo que somos e o que idealizamos ser.',
    'Todos querem o mesmo, todos são iguais: o que pensa de outro modo tende a ir para o manicómio.',
    'Tema o homem a mulher, quando a mulher odeia: porque, no fundo, o homem é simplesmente mau; mas a mulher é perversa.',
    'Na vingança e no amor a mulher é mais bárbara do que o homem.',
    'Eu não sei o que quero ser, mas sei muito bem o que não quero me tornar.',
    'Quem luta com monstros que se cuide para não se tornar um monstro ao fazê-lo. E se olhas por longo tempo para dentro de um abismo, o abismo também olha para dentro de ti.',
    'Minha solidão não tem nada a ver com a presença ou ausência de pessoas… Detesto quem me rouba a solidão, sem em troca me oferecer verdadeiramente companhia.“ —  Friedrich Nietzsche.',
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }
  return (
    <View style={styles.container}>

      <Image
        source={img}
        styles={styles.img}
      />
      <Text style={styles.textofrase}> {textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
})
export default App;
