import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewNFT() {
    // state to hold our form
    const [form, setForm] = useState({
        name: '',
        knownFor: '',
        client: '',
        animal: '',
        protocol: ''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    // submit event handler
    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/NFT`, form)
            // navigate back to /bounties to see the new bounty
            navigate('/NFTS')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>New NFT:</h1>

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
                        placeholder='known crimes...'
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
                        type='number'
                        id='protocol'
                        value={form.protocol}
                        onChange={e => setForm({ ...form, protocol: e.target.value })}
                    />
                </div>

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

