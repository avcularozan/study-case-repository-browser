import { Input } from '@chakra-ui/react'
import RepoList from '../../components/RepoList'
import './index.css'

const Star = () => {
  return (
    <div className="star-container">
      <div className="star-header text-center">
        <div className="star-header-container">
          <h1 className="f0-light">Your Starred Repositories</h1>
          <p className="f4 color-fg-muted col-md-6 mx-auto">
            Browse your starred repositories
          </p>
        </div>
      </div>
      <div className="started-respositories">
        <Input placeholder="Search starts..." />
        <RepoList />
      </div>
    </div>
  )
}

export default Star
