import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import { THEME_TYPE } from '../maker/maker';
import styles from './card_add_form.module.css';

const CardAddForm = ({ addCard }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(), //uuid
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        };
        formRef.current.reset();
        addCard(card);
    };

    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder='name' />
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder='company' />
            <select ref={themeRef} className={styles.select}>
                <option value={THEME_TYPE.DARK}>{THEME_TYPE.DARK}</option>
                <option value={THEME_TYPE.LIGHT}>{THEME_TYPE.LIGHT}</option>
                <option value={THEME_TYPE.COLORFUL}>{THEME_TYPE.COLORFUL}</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder='title' />
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder='email' />
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder='message' />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Add' onClick={onSubmit} />
        </form>
    );
}

export default CardAddForm;