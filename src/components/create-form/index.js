import React, { useState } from 'react'
import uuid from 'react-uuid';

const nameId = 'name' + uuid()
const emailId = 'email' + uuid()
const dobId = 'dob' + uuid()
const countryId = 'country' + uuid()

const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        country: '',
    })

    function onchanged(key, event) {
        setFormData({
            ...formData,
            [key]: event.target.value,
        })
    }


    return (
        <div class="p-4 border rounded">
            <button type="button" class="btn btn-secondary mb-3">← Back to Listing</button>
            <h2>Create a person</h2>
            <form>
                <div class="mb-3">
                    <label for={nameId} class="form-label">Name</label>
                    <input onChange={event => onchanged('name', event)} value={formData.name} type="text" class="form-control" id={nameId} />
                </div>
                <div class="mb-3">
                    <label for={emailId} class="form-label">Email address</label>
                    <input onChange={event => onchanged('email', event)} value={formData.email} type="email" class="form-control" id={emailId} />
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