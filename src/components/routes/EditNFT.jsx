import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function EditNFT(){
    
    const [form, setForm] = useState({
        name: '',
        knownFor: '',
        animal: 0,
        protocol: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        const getNFT = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/NFT/${id}`)
                setForm(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getNFT()
    }, [])

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // axios.put/.post('url', data for the request body)
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/NFT/${id}`, form)
            // navigate back to the details pages for this bounty
            navigate(`/NFTS/${id}`)
        } catch(err) {
            if (err.response){
                setErrorMessage(err.resonse.data.message)
            }
        }
    }

    return(
        <div>
            <h1>Edit NFT:</h1>

            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text'
                        id='name'
                        value={form.name}
                        placeholder='nft name...'
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='knownFor'>Known For:</label>
                    <input 
                        type='text'
                        id='knownFor'
                        value={form.knownFor}
                        placeholder='known for...'
                        onChange={e => setForm({ ...form, knownFor: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='animal'>Animal:</label>
                    <input 
                        type='text'
                        id='animal'
                        value={form.animal}
                        placeholder='enter animal...'
                        onChange={e => setForm({ ...form, animal: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='protocol'>Protocol:</label>
                    <input 
                        type='text'
                        id='protocol'
                        value={form.protocol}
                        onChange={e => setForm({ ...form, protocol: e.target.value })}
                    />
                </div>

                <button type='submit'>Submit Edit</button>
            </form>

            <Link to={`/NFTS/${id}`}>Go Back</Link>
        </div>
    )
}