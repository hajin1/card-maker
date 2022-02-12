import styles from './maker.module.css';

import React, { useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

export const THEME_TYPE = {
    LIGHT: 'light',
    DARK: 'dark',
    COLORFUL: 'colorful'
}

const Maker = ({ authService }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState({
        '1': {
            id: 1,
            name: 'Ellie',
            company: 'Amazon',
            theme: THEME_TYPE.DARK,
            title: 'Software Engineer',
            email: 'ellie@gmail.com',
            message: "Don't forget to code your dream",
            fileName: '',
            fileURL: ''
        },
        '2': {
            id: 2,
            name: 'Bob',
            company: 'Meta',
            theme: THEME_TYPE.LIGHT,
            title: 'Senior Software Engineer',
            email: 'bob@gmail.com',
            message: "I love Coding.",
            fileName: '',
            fileURL: ''
        },
        '3': {
            id: 3,
            name: 'Rachel',
            company: 'Instagram',
            theme: THEME_TYPE.COLORFUL,
            title: 'Product Manager',
            email: 'rachel@gmail.com',
            message: "Design your dream",
            fileName: '',
            fileURL: ''
        }
    });

    const onLogout = () => {
        authService.logout().then(() => {
            navigate('/');
        });
    };

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.section}>
                <Editor cards={cards} addCard={createOrUpdateCard} deleteCard={deleteCard} updateCard={createOrUpdateCard} />
                <Preview cards={cards} />
            </section>
            <Footer />
        </section>
    );
};

export default Maker;