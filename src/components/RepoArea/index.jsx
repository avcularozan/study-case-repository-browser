import { Input } from '@chakra-ui/react'
import './index.css'
import { FaStar, FaRegStar } from 'react-icons/fa'
import RepoList from '../RepoList'

const RepoArea = () => {
  return (
    <div className="repo-area">
      <div className="search">
        <Input placeholder="Search repository..." />
      </div>
      <div className="search-result">
        <div className="available-result">
          <span>Showing 2,669,386 available repository results</span>
        </div>
        <RepoList />
      </div>
    </div>
  )
}

export default RepoArea
