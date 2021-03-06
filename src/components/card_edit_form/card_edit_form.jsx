import React from 'react';
import Button from '../button/button';
import { THEME_TYPE } from '../maker/maker';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard, FileInput }) => {
    const { name, company, title, email, message, theme, fileName } = card;
    const onSubmit = () => {
        deleteCard(card);
    };

    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const onFileChange = (file) => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url
        });
    };

    return (
        <form className={styles.form}>
            <input onChange={onChange} className={styles.input} type="text" name="name" value={name} />
            <input onChange={onChange} className={styles.input} type="text" name="company" value={company} />
            <select onChange={onChange} className={styles.select} value={theme}>
                <option value={THEME_TYPE.DARK}>{THEME_TYPE.DARK}</option>
                <option value={THEME_TYPE.LIGHT}>{THEME_TYPE.LIGHT}</option>
                <option value={THEME_TYPE.COLORFUL}>{THEME_TYPE.COLORFUL}</option>
            </select>
            <input onChange={onChange} className={styles.input} type="text" name="title" value={title} />
            <input onChange={onChange} className={styles.input} type="text" name="email" value={email} />
            <textarea onChange={onChange} className={styles.textarea} name="message" value={message} />
            <div className={styles.fileInput}>
                <FileInput name={fileName} oNFileChange={onFileChange} />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;