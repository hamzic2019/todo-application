// Importing Styles
import './App.css'

import {Routes, Link, Route} from 'react-router-dom'; 
import Navigation from './Components/Navigation/Navigation';
import Collections from './Pages/Collections';



function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>

        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/profile" element={<h1>My Profile</h1>} />
        <Route path="/settings" element={<h1>SETTINGS pAGE</h1>} />
        <Route path="/contact" element={<h1>CONTACT PAGE</h1>} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:id" element={<h1>COLLECTIONS SPECIFIC COLLECTION</h1>} />

        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
     
    </div>
  )
}

export default App
