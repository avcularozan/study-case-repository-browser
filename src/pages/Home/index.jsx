import RepoArea from '../../components/RepoArea'
import UserCard from '../../components/UserCard'
import './index.css'

const Home = () => {
  return (
    <div className="info">
      <UserCard />
      <RepoArea />
    </div>
  )
}

export default Home
