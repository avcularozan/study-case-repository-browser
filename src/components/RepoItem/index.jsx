import './index.css'
import { FaStar, FaRegStar } from 'react-icons/fa'

const RepoItem = () => {
  return (
    <div className="repo-list-item">
      <div className="like">
        <FaStar color="#eac54f" />
        <FaRegStar />
      </div>
      <div>
        <div className="full-name">
          <a href="#">facebook/react</a>
        </div>
        <p className="description">
          A declarative, efficient, and flexible JavaScript library for building
          user interfaces.
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
  )
}

export default RepoItem
