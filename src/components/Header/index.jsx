import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="icon" onClick={() => navigate('/')}>
        Repository Browser
      </div>
    </header>
  )
}

export default Header
