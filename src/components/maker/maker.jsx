import styles from './maker.module.css';
import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

export const THEME_TYPE = {
    LIGHT: 'light',
    DARK: 'dark',
    COLORFUL: 'colorful'
}

const Maker = ({ authService, FileInput, cardRepository }) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState({});
    const location = useLocation();
    const locationState = location?.state;
    const [userId, setUserId] = useState(locationState && locationState.id);

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
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            console.log('--cards--');
            console.log(cards);
            cards ? setCards(cards) : setCards({});
        });
        return (() => stopSync());
    }, [userId]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
                console.log(userId);
            } else {
                navigate('/');
            }
        })
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.section}>
                <Editor cards={cards} addCard={createOrUpdateCard} deleteCard={deleteCard} updateCard={createOrUpdateCard} FileInput={FileInput} />
                <Preview cards={cards} />
            </section>
            <Footer />
        </section>
    );
};

export default Maker;