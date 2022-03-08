import './App.css'
import Header from './components/Header'
import RepoArea from './components/RepoArea'
import UserCard from './components/UserCard'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="info">
        <UserCard />
        <RepoArea />
      </div>
    </div>
  )
}

export default App
