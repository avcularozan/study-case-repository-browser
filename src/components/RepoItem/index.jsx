import { FaRegStar, FaStar } from 'react-icons/fa'
import './index.css'

const RepoItem = ({ repoInfo }) => {
  return (
    <div className="repo-list-item">
      <div className="like">
        <FaStar color="#eac54f" />
        <FaRegStar />
      </div>
      <div>
        <div className="full-name">
          <a href={repoInfo?.html_url} target="_blank">
            {repoInfo?.full_name}
          </a>
        </div>
        <p className="description">{repoInfo?.description}</p>
        {repoInfo?.topics && (
          <div className="tags">
            {repoInfo?.topics.map((topic) => (
              <div className="tag-item">{topic}</div>
            ))}
          </div>
        )}
        <div className="sub-info">
          <div className="sub-info-item">{repoInfo?.stargazers_count}</div>
          <div className="sub-info-item">{repoInfo?.language}</div>
          <div className="sub-info-item">{repoInfo?.license?.name}</div>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
