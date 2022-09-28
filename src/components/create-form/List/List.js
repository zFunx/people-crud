import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        axios('employees').then(res => {
            setPersons(res.data.data)
        }).catch(err => {
            console.error('Something went wrong while fetching people', err);
        })
    }, [])


    return (<div>
        <Link to="/create" type="button" class="btn btn-secondary mb-3">+ Create Person</Link>
        {persons.map(person => (
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{person.employee_name}</h5>
                    <p class="card-text">Age: {person.employee_age}</p>
                    <Link to={`edit/${person.id}`} class="btn btn-primary">Edit</Link>
                </div>
            </div>
        ))}
    </div>)
}

export default List