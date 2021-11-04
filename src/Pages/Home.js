import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

import "../Pages/Home.css"

function Home() {
    const [datas, setData] = useState([])
    const userCollectionRef = collection(db, "customerInfo")

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUser()
    }, [])

    // const update = async (id, age) => {
    //     const userDoc = doc(db, "customerInfo", id);
    //     const newVal = { age : age + 1 };
    //     await updateDoc(userDoc, newVal);
    // }

    const deleteuser = async (id) => {
        const userDoc = doc(db, "customerInfo", id);
        await deleteDoc(userDoc);
        window.location.reload()
    }

    return (
        <div>
            <h1>All Customers details</h1>

            <table className="container">
                <tr className="table-header">
                    <th > Customer Name</th>
                    <th > Customer age</th>
                    <th > E mail</th>
                    <th > Contact No</th>
                    <th > </th>

                </tr>

                {
                    datas.map((user) => {

                        return (<tr>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>

                            <td>

                                <button onClick={() => {
                                    //update(user.id)
                                }}><i class="far fa-edit"></i></button>

                                <button onClick={() => {
                                    deleteuser(user.id)
                                }}><i class="fas fa-trash-alt"></i></button>

                                <Link to={`/view/${user.id}`}>
                                    <button><i class="fas fa-file"></i></button>
                                </Link>

                            </td>
                        </tr>)

                    })
                }
            </table>
        </div>
    )
}

export default Home
