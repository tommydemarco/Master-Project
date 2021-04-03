import { Fragment } from 'react'

import styles from "./FileUploader.module.scss"

const FileUploader = ({ setFormData, setFormError, field }) => {

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024)
            setFormError((previousState) => ({...previousState, [field]: true}));
        else {
            setFormData((previousState) => ({...previousState, [field]: file}) );
            setFormError((previousState) => ({...previousState, [field]: false}))
        }
      };

    return (
        <Fragment>
            <label className={styles.label} htmlFor="myfile">Select an image:</label>
            <input type="file" id="image" name="image"></input>
        </Fragment>
    )
}

export default FileUploader;