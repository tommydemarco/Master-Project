import { useState, useRef } from "react";

import useFormValidation from "../../hooks/useFormValidation";
import onFormFieldChange from "../../utils/onFormFieldChange";
import setFormError from "../../utils/setFormError";

import Link from "next/link"

import ErrorMessage from "../ErrorMessage"

const setFormErrorObject = setFormError

const ContactForm = () => {

    const checkboxRef = useRef()

    const [ formData, setFormData ] = useState({ 
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false
    })

    const [ changingField, setChangingField ] = useState(null)
    const [ formError, setFormError ] = useState(() => setFormErrorObject(formData))
    const onFieldChange = onFormFieldChange(setChangingField, formData, setFormData)

    useFormValidation(changingField, formData, setFormError)

    const onSubmit = (e) => {
        e.preventDefault()
        if(checkboxRef.current.checked !== true) {
            setFormError({...formError, privacy: true })
            return
        }
        console.log(formData)
    }

    const errorStyles = { background: "rgba(255, 68, 0, 0.324)", border: "1px solid red"}

    return (
        <section className="contact-area ptb-100">
            <div className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src="/images/marketing.png" alt="image" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <form id="contactForm" onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Name*"
                                            onChange={(e) => onFieldChange(e, "name")}
                                            style={formError.name ? errorStyles : {}}
                                        />
                                        {formError.name && <ErrorMessage absolute={true} />}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email*"
                                            onChange={(e) => onFieldChange(e, "email")}
                                            style={formError.email ? errorStyles : {}}
                                        />
                                        {formError.email && <ErrorMessage absolute={true} />}
                                    </div>
                                </div>                              

                                <div className="col-lg-12 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject*"
                                            onChange={(e) => onFieldChange(e, "subject")}
                                            style={formError.subject ? errorStyles : {}}
                                        />
                                        {formError.subject && <ErrorMessage absolute={true} />}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            id="message"
                                            cols="30"
                                            rows="5"
                                            required
                                            data-error="Write your message"
                                            placeholder="Your Message*"
                                            onChange={(e) => onFieldChange(e, "message")}
                                            style={formError.message ? errorStyles : {}}
                                        />
                                        {formError.message && <ErrorMessage absolute={true} />}
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="checkbox"
                                            name="privacy"
                                            ref={checkboxRef}
                                            onChange={(e) => onFieldChange(e, "privacy")}
                                        />
                                        <label htmlFor="privacy" style={{ marginLeft: "10px"}}>
                                            I confirm that I agree with the <Link href="/privacy-policy"><a>Privacy policy</a></Link>
                                        </label>
                                        {formError.privacy && <ErrorMessage />}
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Send Message
                                    </button>
                                    <div
                                        id="msgSubmit"
                                        className="h3 text-center hidden"
                                    ></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
