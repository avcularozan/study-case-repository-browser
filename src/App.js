import './App.css'
import Header from './components/Header'
import UserCard from './components/UserCard'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="info">
        <UserCard />
      </div>
    </div>
  )
}

export default App
