import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import foto from './assets/foto.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/lucas-vieira-urquiza-0478b01a4/');
        break;
      case 'instagram':
        Alert.alert('Meu Instagram', 'https://www.instagram.com/lucas_urquiza/');
        break;
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/lucasvurquiza');
        break;
      default:
        break;
    }
  }

  return (
    <>
      <ScrollView>
        <View style={style.page}>
          <View style={style.container_cabecalho}>
            <Image source={foto} style={style.foto}></Image>
            <Text style={style.nome}>LUCAS VIEIRA URQUIZA</Text>
            <Text style={style.funcao}>Desenvolvedor Mobile</Text>
            <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name="github" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
                <Icon name="instagram" size={30} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Icon name="linkedin" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          <Card titulo="Formação Acadêmica">
            <Text style={style.card_content_text}>IFG</Text>
            <Text style={style.card_content_text}>DIO</Text>
            <Text style={style.card_content_text}>IGTI</Text>
          </Card>

          <Card titulo="Experiências Profissionais">
            <Text style={style.card_content_text}>Amazon</Text>
            <Text style={style.card_content_text}>Google</Text>
            <Text style={style.card_content_text}>Facebook</Text>
          </Card>

        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_content_text: {
      color: '#939393',
      marginBottom: 10
  }

});

export default App;
