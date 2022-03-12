import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts'
import Home from './pages/Home'
import Star from './pages/Star'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/stars" element={<Star />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
