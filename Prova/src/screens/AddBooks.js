import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddBooks({ navigation }) {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookYear, setBookYear] = useState('');
    const [bookGenre, setBookGenre] = useState('');
    const [bookDescription, setBookDescription] = useState('');

    const handleSaveBook = async () => {
        try {
            const existingBooks = await AsyncStorage.getItem('books');
            const books = existingBooks ? JSON.parse(existingBooks) : [];
            const newBook = { bookTitle, bookAuthor, bookYear, bookGenre, bookDescription };
            books.push(newBook);
            await AsyncStorage.setItem('books', JSON.stringify(books));
            navigation.goBack();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o título do livro"
                value={bookTitle}
                onChangeText={setBookTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o autor do livro"
                value={bookAuthor}
                onChangeText={setBookAuthor}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o ano do livro"
                value={bookYear}
                onChangeText={setBookYear}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o gênero do livro"
                value={bookGenre}
                onChangeText={setBookGenre}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite a descrição do livro"
                value={bookDescription}
                onChangeText={setBookDescription}
            />
            <TouchableOpacity style={styles.button} onPress={handleSaveBook} activeOpacity={0.5}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: '#9FC131',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
    button: {
        backgroundColor: '#005C53',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});
