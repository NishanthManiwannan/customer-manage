import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

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
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> customer Name</th>
                        <th> customer age</th>
                    </tr>
                </thead>

                {
                    datas.map((user) => {

                        return (<>
                            <tbody>{user.name}</tbody>
                            <tbody>{user.age}</tbody>
                            <tbody>
                                <button onClick={() => {
                                    deleteuser(user.id)
                                }}>Delete</button>
                            </tbody>

                            {/* <tbody>
                                <button onClick={() => {
                                    update(user.id, user.age)
                                }}>update</button>
                            </tbody> */}
                        </>)

                    })
                }
            </table>
        </div>
    )
}

export default Home
