const onFormFieldChange = (changingFieldSetter, formData, dataSetter) => {
    return (e, field) => {
        changingFieldSetter(field);
        if (e.target.value === "on") {
            dataSetter({ ...formData, [field]: e.target.checked });
            return;
        }
        dataSetter({ ...formData, [field]: e.target.value });
    };
};

export default onFormFieldChange;
