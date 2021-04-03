import PropTypes from "prop-types"

import styles from "./FileUploader.module.scss"

const FileUploader = ({ setFormData, setFormError, field, sizeLimit, allowedFormats }) => {

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        console.log(file)
        if (file.size > sizeLimit)
            setFormError((previousState) => ({...previousState, [field]: "File is too big"}));
        else if (!allowedFormats.includes(file.type)) {
            setFormError((previousState) => ({...previousState, [field]: "Invalid format"}))
        }
        else {
            setFormData((previousState) => ({...previousState, [field]: file}) );
            setFormError((previousState) => ({...previousState, [field]: false}))
        }
      };

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="myfile">Select an image:</label>
            <input type="file" id="image" name="image" onChange={handleFileInput}></input>
        </div>
    )
}

FileUploader.propTypes = {
    setFormData: PropTypes.func.isRequired, 
    setFormError: PropTypes.func.isRequired, 
    field: PropTypes.string.isRequired, 
    sizeLimit: PropTypes.number, 
    allowedFormats: PropTypes.arrayOf(PropTypes.string)
}

FileUploader.defaultProps = {
    allowedFormats: ["image/jpeg"],
    sizeLimit: 100000
}

export default FileUploader;