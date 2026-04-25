import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './src/styleSheet/estilos';

function App() {
  let ArrayFrases = [
    'Todo grande começo parece um ovo: pequeno, frágil, mas cheio de vida esperando para eclodir.',
    'Não tenha medo de quebrar — o ovo precisa se romper para se tornar algo maior.',
    'Você é o pinto dentro do ovo: pode não enxergar o mundo lá fora ainda, mas está crescendo para ele.',
    'Assim como o ovo resiste à pressão antes de romper, você também é mais forte do que parece.',
    'A casca do ovo não é prisão — é proteção. Há um tempo certo para sair dela.',
    'Cada manhã é como um ovo fresco: intacto, cheio de possibilidades e pronto para ser transformado.',
    'O ovo só vira algo extraordinário quando enfrenta o calor. Não fuja dos seus desafios — deixe-os te transformar.'
  ];

  const [textoBotao, setTextoBotao] = useState('Quebrar Casca...');
  const [imgOvo, setImgOvo] = useState(require('./src/image/ovo1.png'));
  const [textoFrase, setTextoFrase] = useState('Alguma frase aqui...');

  function alteraStatusOvo() {
    let numFrase;
    if (textoBotao == "Quebrar Casca...") {
      numFrase = Math.floor(Math.random() * ArrayFrases.length);
      setTextoFrase(ArrayFrases[numFrase]);
      setTextoBotao('Nova Tentativa');
      setImgOvo(require('./src/image/ovo2.png'));
    }
    else {
      setTextoBotao('Quebrar Casca...');
      setImgOvo(require('./src/image/ovo1.png'));
      setTextoFrase('Alguma frase aqui...');
    }
  }

  return (
    <View style={estilos.areaFundo}>
      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Ovo da Sorte</Text>
      </View>
      <View style={estilos.areaImg}>
        <Image source={imgOvo}
          style={estilos.img} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={estilos.textoFrase}>{textoFrase}</Text>
        <TouchableOpacity style={estilos.botao}
          onPress={alteraStatusOvo}>
          <View style={estilos.areaBotao}>
            <Image source={require('./src/image/ovo3.png')}
              style={{ marginRight: 20, width: 40, height: 40 }} />
            <Text style={estilos.textoBotao}>{textoBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;