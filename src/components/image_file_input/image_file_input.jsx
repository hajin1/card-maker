import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ name, imageUploader, onFileChange }) => {
    const inputRef = useRef();
    const onChange = async (e) => {
        const uploaded = await imageUploader.upload(e.target.files[0]);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url
        });
    };

    const onButtonClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    };

    return (
        <div className={styles.container}>
            <input className={styles.input} ref={inputRef} type="file" accept='image/*' name="file" onChange={onChange} />
            <button className={styles.button} onClick={onButtonClick}>
                {name || 'No File'}
            </button>
        </div>
    );
}

export default ImageFileInput;