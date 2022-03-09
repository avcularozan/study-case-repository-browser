import { Input } from '@chakra-ui/react'
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

export default Star
