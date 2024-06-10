import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function Books({ navigation }) {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const storedBooks = await AsyncStorage.getItem('books');
      const books = storedBooks ? JSON.parse(storedBooks) : [];
      setBooks(books);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadBooks();
    }, [])
  );

  const handleAddBooks = () => {
    navigation.navigate('AddBooks');
  };

  const handleDeleteBook = async (index) => {
    try {
      const updatedBooks = books.filter((_, i) => i !== index);
      await AsyncStorage.setItem('books', JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
    } catch (error) {
      console.error(error);
    }
  };

  const renderBookItem = ({ item, index }) => (
    <View style={styles.bookItem}>
      <Text style={styles.bookTitle}>{item.bookTitle}</Text>
      <Text style={styles.bookDetails}>Autor: {item.bookAuthor}</Text>
      <Text style={styles.bookDetails}>Ano: {item.bookYear}</Text>
      <Text style={styles.bookDetails}>Gênero: {item.bookGenre}</Text>
      <Text style={styles.bookDetails}>Descrição: {item.bookDescription}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteBook(index)}
      >
        <Text style={styles.deleteButtonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Livros</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBookItem}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddBooks} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Adicionar Livros</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    color: '#999999',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookDetails: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#005C53',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
