import RepoItem from '../RepoItem'
import './index.css'

const RepoList = ({ repos, changeStarred }) => {
  return (
    <div className="repo-list">
      {repos &&
        repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repoInfo={repo}
            changeStarred={changeStarred}
          />
        ))}
    </div>
  )
}

export default RepoList
