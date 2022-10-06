import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function NFT(){
    const [NFT, setNFT] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getNFT = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/NFT/${id}`)
                setNFT(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getNFT()
    }, [])

    const handleDelete = async () => {
        try {
            // axios to the backend to delete this bounty
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/NFT/${id}`)
            // after delettion, navigate to back to /bounties
            navigate('/NFTS')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return(
        <div>
            <h1>NFT Details</h1>

            <p>{errorMessage}</p>

            <div>
                <Link to={`/NFTS/${id}/edit`}>
                    <button>Edit</button>
                </Link>

                <button
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

            <div>
                <h2>{NFT.name}</h2>

                <p>Known for: {NFT.knownFor}</p>
                
                <p>Animal: {NFT.animal}</p>
                
                <p>Protocol: {NFT.protocol}</p>
                
            </div>
        </div>
    )
}