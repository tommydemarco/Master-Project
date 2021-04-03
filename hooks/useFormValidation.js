import { useEffect } from "react";

const useFormValidation = (changingField, formData, setFormError) => {
    useEffect(() => {
        for (const key in formData) {
            if (changingField === key) {
                if (formData[key] === "")
                    setFormError((prevState) => ({
                        ...prevState,
                        [key]: true,
                    }));
                else
                    setFormError((prevState) => ({
                        ...prevState,
                        [key]: false,
                    }));
            }
        }
    }, [changingField, formData]);
};

export default useFormValidation;
