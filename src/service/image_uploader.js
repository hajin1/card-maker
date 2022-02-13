const url = `https://api.cloudinary.com/v1_1/dfqwmqy64/image/upload`;

class ImageUploader {
    upload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "p2qj5alx");
        const result = await fetch(url, {
            method: "POST",
            body: formData
        });
        return await result.json();
    };
}

export default ImageUploader;