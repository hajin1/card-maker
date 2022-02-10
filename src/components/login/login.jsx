import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const navigate = useNavigate();

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        })
    });

    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent).then((result) => {
            // const credential = result.credential;
            // const token = credential.accessToken;
            // const user = result.user;
            goToMaker(result.user.uid);
        });
    };

    const goToMaker = (userId) => {
        navigate('/maker', { state: { id: userId } });
    }

    return (
        <section className={styles.login}>
            <Header />
            <section className={styles.section}>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li><button className={styles.button} onClick={onLogin}>Google</button></li>
                    <li><button className={styles.button} onClick={onLogin}>Github</button></li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;