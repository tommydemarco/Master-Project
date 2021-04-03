import { useState, useRef } from 'react'
import Link from "next/link"

import useFormValidation from "../../hooks/useFormValidation";
import onFormFieldChange from "../../utils/onFormFieldChange";
import setFormError from "../../utils/setFormError";

import ErrorMessage from "../ErrorMessage"
import FileUploader from "../../utils/FileUploader";
import MarkdownEditor from "../MarkdownEditor"

import styles from "./PostForm.module.scss"

const setFormErrorObject = setFormError

const PostForm = () => {
    const checkboxRef = useRef()

    const [ formData, setFormData ] = useState({ 
        title: "",
        subtitle: "",
        category: "",
        image: null,
        body: "",
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
                <div className="row h-100 justify-content-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Title*"
                                        onChange={(e) => onFieldChange(e, "title")}
                                        style={formError.title ? errorStyles : {}}
                                    />
                                    {formError.title && <ErrorMessage absolute={true} />}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        required={true}
                                        placeholder="Subtitle*"
                                        onChange={(e) => onFieldChange(e, "subtitle")}
                                        style={formError.subtitle ? errorStyles : {}}
                                    />
                                    {formError.subtitle && <ErrorMessage absolute={true} />}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <div className="select-box">
                                        <select className="form-control">
                                            <option value="1">Select a Category</option>
                                            <option value="2">Javascript News</option>
                                            <option value="0">Tutorial</option>
                                            <option value="3">Programming News</option>
                                        </select>
                                    </div>
                                    {formError.name && <ErrorMessage absolute={true} />}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <FileUploader setFormData={setFormData} setFormError={setFormError} field="image" />
                                    {formError.image && <ErrorMessage absolute={true} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <form id="contactForm" onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <MarkdownEditor setFormData={setFormData} />
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
                                        Add new post
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

export default PostForm
