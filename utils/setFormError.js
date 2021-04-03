const setFormError = (formData) => {
    let formError = {};
    for (const key in formData) {
        formError[key] = null;
    }

    return formError;
};

export default setFormError;
