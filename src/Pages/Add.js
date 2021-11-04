import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { db } from '../firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

function Add() {

    const states = {
        name: "",
        email: "",
        address: "",
        contact: 0,
        age: 0,
        gender: 0
    }
    const [details, setDetails] = useState(states);

    const userCollectionRef = collection(db, "customerInfo")
    const {name, email, address, contact, age, gender} = details

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setDetails({...details, [name]: value});
    }

    const hundleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(userCollectionRef, {
            name : name, 
            email : email,
            address :address,
            contact : Number(contact),
            age : Number(age),
            gender : Number(gender)
        })

    }

    return (
        <div>
            <h1>Add New Customer</h1>
            <form onSubmit={hundleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter customer name" value={name} onChange={handleInputChange}></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter customer email" value={email} onChange={handleInputChange}></input>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder="Enter customer address" value={address} onChange={handleInputChange}></input>

                <label htmlFor="contact">Contact</label>
                <input type="number" id="contact" name="contact" placeholder="Enter contact no" value={contact} onChange={handleInputChange}></input>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" placeholder="Customer age" value={age} onChange={handleInputChange}></input>

                <label htmlFor="gender">Gender</label>
                <input type="number" id="gender" name="gender" placeholder="Enter customer name" value={gender} onChange={handleInputChange}></input>

                <input type="submit" value="save"></input>
            </form>
        </div>
    )
}

export default Add
