import axios from "axios"
import { useState, useEffect } from "react"

export default function Hello() {
    const [person, setPerson] = useState({name: ''})
    
    useEffect(() => {
        axios.get('/api/hello')
        .then(res => setPerson(res.data))
        .catch(err => console.error(err))
    }, [])

    return (
        <h1>Hello {person.name}</h1>
    )
}