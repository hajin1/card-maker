import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import { THEME_TYPE } from '../maker/maker';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card }) => {
    const { name, company, title, email, message, theme, fileName, fileURL } = card;
    const onSubmit = () => {

    }
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="company" value={company} />
            <select className={styles.select}>
                <option value={THEME_TYPE.DARK}>{THEME_TYPE.DARK}</option>
                <option value={THEME_TYPE.LIGHT}>{THEME_TYPE.LIGHT}</option>
                <option value={THEME_TYPE.COLORFUL}>{THEME_TYPE.COLORFUL}</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} />
            <input className={styles.input} type="text" name="email" value={email} />
            <textarea className={styles.textarea} name="message" value={message} />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    );
}


export default CardEditForm;