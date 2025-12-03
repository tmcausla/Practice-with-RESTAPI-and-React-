import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function PetList() {
    const [pets, setPets] = useState([])

    const getPets = async () => {
        try {
            const resp = await axios.get('http://localhost:3000/pets')
            if (resp.status === 200) setPets(resp.data)

        } catch (err) {
            console.error('Error', err)
        }
    }

    useEffect(() => { getPets() }, [])

    return (
        <>
            <h2>Pet List</h2>

            {pets?.map((pet) => {
                return (
                    <div key={pet?.id}>
                        <p>{pet?.name} - {pet?.type} - {pet?.breed}</p>

                        <Link to={`/${pet?.id}`}>
                            <button>Pet detail</button>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default PetList