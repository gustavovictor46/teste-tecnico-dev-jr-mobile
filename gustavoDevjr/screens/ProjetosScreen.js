import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const projetos = [
  {
    id: '1',
    titulo: 'App de Perfil Profissional',
    descricao: 'Apresenta perfil, habilidades e contato em uma navegação por abas.',
  },
  {
    id: '2',
    titulo: 'Lista de Habilidades',
    descricao: 'Mostra competências em cartões com estilo simples e organizado.',
  },
];

const contato = [
  { id: '1', label: 'E-mail', value: 'gustavo@example.com' },
  { id: '2', label: 'GitHub', value: 'github.com/gustavodevjr' },
  { id: '3', label: 'LinkedIn', value: 'linkedin.com/in/gustavo-victor' },
];

export default function ProjetosScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarContato = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Atenção', 'Preencha todos os campos antes de enviar.');
      return;
    }

    Alert.alert('Contato enviado', 'Obrigado! Sua mensagem foi registrada.');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Projetos</Text>

      {projetos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardText}>{item.descricao}</Text>
        </View>
      ))}

      <Text style={styles.subtitle}>Contato</Text>
      <View style={styles.card}>
        {contato.map((item) => (
          <View key={item.id} style={styles.contactRow}>
            <Text style={styles.contactLabel}>{item.label}</Text>
            <Text style={styles.contactText}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Enviar mensagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Sua mensagem"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={4}
        />
        <Button title="Enviar contato" onPress={enviarContato} color="#1f2937" />
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
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#9ecfd8',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#4b5563',
    lineHeight: 22,
  },
  contactRow: {
    marginBottom: 12,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1f2937',
  },
  contactText: {
    fontSize: 15,
    color: '#4b5563',
  },
  input: {
    backgroundColor: '#aaadad',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#111827',
    marginBottom: 12,
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
});
