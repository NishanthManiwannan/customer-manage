import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { Link, useHistory, useParams } from 'react-router-dom'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'


function View() {

    const [view, setView] = useState([]);
    const { id } = useParams();

    const userCollectionRef = collection(db, "customerInfo")


    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setView(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getUser()
    }, [id])


    return (
        <div>
            <h1>Customer Detail</h1>

            {
                view.map((user) => {
                    if (user.id === id) {
                        return (<>
                            <h3>{user.name}</h3>
                            <Link to="/">
                                <button>Back</button>
                            </Link>
                        </>)
                    }
                })
            }
        </div >
    )
}

export default View
