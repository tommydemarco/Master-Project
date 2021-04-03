import { useState, useEffect, useRef } from 'react'
import Link from "next/link"

import ErrorMessage from "../ErrorMessage"
import styles from "./PostForm.module.scss"

const PostForm = () => {
    const checkboxRef = useRef()

    const [ formData, setFormData ] = useState({ 
        title: "",
        category: "",
        tags: "",
    })

    const [ changingField, setChangingField ] = useState(null)

    const [ formError, setFormError ] = useState({
        name: null,
        email: null,
        subject: null,
        message: null,
        privacy: null
    })

    const onFieldChange = (e, field) => {
        setChangingField(field)
        setFormData({...formData, [field]: e.target.value})
    }

    useEffect(() => {
        if(changingField === "name") {
            if (formData.name === "") setFormError((prevState) => ({...prevState, name: true}))
            else setFormError((prevState) => ({...prevState, name: false}))
        } else if (changingField === "email") {
            if (formData.email === "") setFormError((prevState) => ({...prevState, email: true}))
            else setFormError((prevState) => ({...prevState, email: false}))
        } else if (changingField === "subject") {
            if (formData.subject === "") setFormError((prevState) => ({...prevState, subject: true}))
            else setFormError((prevState) => ({...prevState, subject: false}))
        } else if (changingField === "message") {
            if (formData.message === "") setFormError((prevState) => ({...prevState, message: true}))
            else setFormError((prevState) => ({...prevState, message: false}))
        } else if (changingField === "privacy") {
            if (checkboxRef.current.checked !== true) setFormError((prevState) => ({...prevState, privacy: true}))
            else setFormError((prevState) => ({...prevState, privacy: false}))
        }
    }, [ changingField, formData ])

    const onSubmit = (e) => {
        e.preventDefault()
        if(checkboxRef.current.checked !== true) {
            setFormError({...formError, privacy: true })
            return
        }
    }

    useEffect(() => {
        console.log(formError)
    }, [ formError ])

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
                                    <label className={styles.label} htmlFor="myfile">Select an image:</label>
                                    <input type="file" id="image" name="image"></input>
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            required={true}
                                            data-error="Please enter your name"
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
                                            type="email"
                                            className="form-control"
                                            required={true}
                                            data-error="Please enter your email"
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
