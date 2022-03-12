import RepoItem from '../RepoItem'
import './index.css'

const RepoList = ({ repos, changeStarred }) => {
  return (
    <div className="repo-list">
      {repos &&
        repos.map((repo, index) => (
          <RepoItem key={index} repoInfo={repo} changeStarred={changeStarred} />
        ))}
    </div>
  )
}

export default RepoList
