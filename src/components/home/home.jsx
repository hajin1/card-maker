import styles from './home.module.css';

import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Home = ({ authService }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout().then(() => {
            navigate('/login');
        });
    };

    return (
        <section className={styles.home}>
            <Header onLogout={onLogout} />
            <section className={styles.section}>
                Home
            </section>
            <Footer />
        </section>
    );
};

export default Home;