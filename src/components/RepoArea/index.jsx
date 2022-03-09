import { Input } from '@chakra-ui/react'
import './index.css'

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
        <div className="repo-list">
          <div className="repo-list-item">
            <div className="full-name">
              <a href="#">facebook/react</a>
            </div>
            <p className="description">
              A declarative, efficient, and flexible JavaScript library for
              building user interfaces.
            </p>
            <div className="tags">
              <div className="tag-item">declarative</div>
              <div className="tag-item">frontend</div>
              <div className="tag-item">javascript</div>
              <div className="tag-item">library</div>
              <div className="tag-item">react</div>
            </div>
            <div className="sub-info">
              <div className="sub-info-item">184k</div>
              <div className="sub-info-item">JavaScript</div>
              <div className="sub-info-item">MIT License</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepoArea
