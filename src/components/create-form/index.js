import React from 'react'
import uuid from 'react-uuid';

const nameId = 'name' + uuid()
const emailId = 'email' + uuid()
const dobId = 'dob' + uuid()
const countryId = 'country' + uuid()

const index = () => {


    return (
        <div class="p-4 border rounded">

            <button type="button" class="btn btn-secondary mb-3">← Back to Listing</button>
            <h2>Create a person</h2>
            <form>
                <div class="mb-3">
                    <label for={nameId} class="form-label">Name</label>
                    <input type="text" class="form-control" id={nameId} />
                </div>
                <div class="mb-3">
                    <label for={emailId} class="form-label">Email address</label>
                    <input type="email" class="form-control" id={emailId} />
                </div>
                <div class="mb-3">
                    <label for={dobId} class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" id={dobId} />
                </div>
                <div class="mb-3">
                    <label for={countryId} class="form-label">Country</label>
                    <input type="text" class="form-control" id={countryId} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default index