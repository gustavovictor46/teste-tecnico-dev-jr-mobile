import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const habilidades = [
  { id: '1', nome: 'React Native' },
  { id: '2', nome: 'JavaScript' },
  { id: '3', nome: 'Expo' },
  { id: '4', nome: 'Git e GitHub' },
  { id: '5', nome: 'UX básico' },
  { id: '6', nome: 'Componentes reutilizáveis' },
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <FlatList
        data={habilidades}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.habilidadeCard}>
            <Text style={styles.habilidadeText}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5790c9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  habilidadeCard: {
    backgroundColor: '#9ecfd8',
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  habilidadeText: {
    fontSize: 17,
    color: '#111827',
  },
});
