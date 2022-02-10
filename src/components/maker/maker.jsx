import styles from './maker.module.css';

import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout().then(() => {
            navigate('/');
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <section className={styles.section}>
                <Editor />
                <Preview />
            </section>
            <Footer />
        </section>
    );
};

export default Maker;