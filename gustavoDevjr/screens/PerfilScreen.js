import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';


export default function PerfilScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={require('../assets/imagem-perfil.jpg')} style={styles.avatar} />
      <Text style={styles.name}>Gustavo Victor</Text>
      <Text style={styles.role}>Desenvolvedor Mobile Júnior</Text>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.paragraph}>
          Sou um futuro desenvolvedor fullstack, ainda estudando, focado em criar aplicativos móveis simples, limpos e funcionais.
          Tenho interesse em aprender novas tecnologias e construir interfaces que facilitem a experiência do usuário. Também sou multi-instrumentista, toco há 8 anos e atuo profissionalmente há 3 anos.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <Text style={styles.paragraph}>Experiência com React Native, Expo, componentes básicos e navegação por abas.</Text>
        <Text style={styles.paragraph}>Gosto de trabalhar com código organizado, estilo consistente e telas acessíveis.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5790c9',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 80,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: '#1f2937',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  role: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#9ecfd8',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },
});
