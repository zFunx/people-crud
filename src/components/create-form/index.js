import React, { useState } from 'react'
import uuid from 'react-uuid';

const nameId = 'name' + uuid()
const emailId = 'email' + uuid()
const dobId = 'dob' + uuid()
const countryId = 'country' + uuid()

const initFormData = {
    name: '',
    email: '',
    dob: '',
    country: '',
}

const Index = () => {
    const [formData, setFormData] = useState(initFormData)
    const [err, setErr] = useState(initFormData)

    function onchanged(key, event) {
        setErr({
            ...err,
            [key]: '',
        })

        setFormData({
            ...formData,
            [key]: event.target.value,
        })
    }


    function createPerson(event) {
        event.preventDefault()

        if (!validate()) {
            return;
        }
    }

    function validate() {
        const tempErr = { ...err }
        let isValid = true;

        if (!formData.name) {
            tempErr.name = 'Please enter person\'s name'
            isValid = false;
        }
        if (!formData.email || validateEmail(formData.email)) {
            tempErr.email = 'Please enter a valid email'
            isValid = false;
        }

        setErr(tempErr)
        return isValid;
    }

    function validateEmail(email){
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function clearValidation(){
        setErr(initFormData)
    }

    return (
        <div class="p-4 border rounded">
            <button type="button" class="btn btn-secondary mb-3">← Back to Listing</button>
            <h2>Create a person</h2>
            <form onSubmit={createPerson}>
                <div class="mb-3">
                    <label for={nameId} class="form-label">Name*</label>
                    <input onChange={event => onchanged('name', event)} value={formData.name} type="text" class="form-control" id={nameId} />
                    <span className="text-danger">{err.name}</span>
                </div>
                <div class="mb-3">
                    <label for={emailId} class="form-label">Email address*</label>
                    <input onChange={event => onchanged('email', event)} value={formData.email} type="email" class="form-control" id={emailId} />
                    <span className="text-danger">{err.email}</span>
                </div>
                <div class="mb-3">
                    <label for={dobId} class="form-label">Date of Birth</label>
                    <input onChange={event => onchanged('dob', event)} value={formData.dob} type="date" class="form-control" id={dobId} />
                </div>
                <div class="mb-3">
                    <label for={countryId} class="form-label">Country</label>
                    <input onChange={event => onchanged('country', event)} value={formData.country} type="text" class="form-control" id={countryId} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Index