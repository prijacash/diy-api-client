import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function NFTS(){
    // bounties form the backend
    const [NFTS, setNFTS] = useState([])
    // state for messages from backend 
    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)

    useEffect(() => {
        const getNFTS = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/NFT`)
                // console.log(response.data)
                // TODO: sort by date and only show the most recent bounties

                setNFTS(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getNFTS()
    }, [])  // only fire on page load

    const NFTLinks = NFTS.map(NFT => {
        return (
            <div key={NFT._id}>
                <Link to={`/NFTS/${NFT._id}`}>{NFT.name}</Link>
            </div>
        )
    })
  
    return(
        <div>
            <h1>ALL NFTS </h1>

            {NFTLinks}

            <p>{errorMessage}</p>

        </div>
    )
}