import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RepoList from '../../components/RepoList'
import { repoValue, setStoreRepo } from '../../_store/slices/repo'
import './index.css'

const Star = () => {
  const repoStoreValue = useSelector(repoValue)
  const dispatch = useDispatch()
  const [starredList, setStarredList] = useState(
    repoStoreValue?.starredList || []
  )

  const changedStar = (item, status) => {
    let changedStar = Object.assign([], starredList)
    changedStar = starredList.filter((star) => star.id !== item.id)
    dispatch(
      setStoreRepo({
        ...repoValue,
        starredList: changedStar
      })
    )
    setStarredList(changedStar)
  }

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
        {starredList.length > 0 ? (
          <RepoList repos={starredList} changeStarred={changedStar} />
        ) : (
          <p className="h3 text-center">
            You don’t have any starred repositories, yet.
          </p>
        )}
      </div>
    </div>
  )
}

export default Star
