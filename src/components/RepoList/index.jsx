import RepoItem from '../RepoItem'
import './index.css'

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos && repos.map((repo) => <RepoItem repoInfo={repo} key={repo.id} />)}
    </div>
  )
}

export default RepoList
