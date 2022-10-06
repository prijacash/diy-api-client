import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/partials/NavBar'
import Home from './components/routes/Home'
import NFTS from './components/routes/NFTS'
import NFT from './components/routes/NFT'
import EditNFT from './components/routes/EditNFT'
import NewNFT from './components/routes/NewNFT'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/NFTS'
            element={<NFTS />}
          />

          <Route 
            path='/NFTS/new'
            element={<NewNFT />}
          />

          <Route 
            path='/NFTS/:id'
            element={<NFT />}
          />

          <Route 
            path='/NFTS/:id/edit'
            element={<EditNFT />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
