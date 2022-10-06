import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/nfts'>All NFTs</Link>
                </li>

                <li>
                    <Link to='/nts/new'>Add NFT</Link>
                </li>
            </ul>
        </nav>
    )
}
