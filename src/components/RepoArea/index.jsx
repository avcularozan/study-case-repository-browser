import { CircularProgress, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAxios } from '../../_common/_services'
import { repoValue, setStoreRepo } from '../../_store/slices/repo'
import RepoList from '../RepoList'
import './index.css'

const RepoArea = () => {
  const repoStoreValue = useSelector(repoValue)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('react')
  const [repoList, setRepoList] = useState([])
  const [starred, setStarred] = useState(repoStoreValue?.starredList || [])

  const [{ data: searchData, loading: searchLoading }, getSearchRequest] =
    useAxios(
      {
        url: `/search/repositories?q=${search}`,
        method: 'GET'
      },
      { manual: true }
    )

  useEffect(() => {
    if (search.length > 4) getSearchRequest()
  }, [search])

  useEffect(() => {
    if (searchData?.items?.length) {
      const preparedItems = searchData?.items.map((item) => ({
        ...item,
        isStarred: false
      }))
      setRepoList(preparedItems)
    }
  }, [searchData])

  const changeStarred = (item, isStarred) => {
    changedList(item, isStarred)
    changedStar(item, isStarred)
  }

  const changedList = (item, status) => {
    const list = repoList.map((repo) => {
      if (repo.id === item.id) {
        return Object.assign({}, repo, { isStarred: status })
      }
      return repo
    })
    setRepoList(list)
  }

  const changedStar = (item, status) => {
    let changedStar = Object.assign([], starred)
    if (status) {
      const isAlreadyStarred = changedStar.some((star) => star.id === item.id)
      if (!isAlreadyStarred)
        changedStar.push(Object.assign({}, item, { isStarred: status }))
    } else {
      changedStar = starred.filter((star) => star.id !== item.id)
    }
    dispatch(
      setStoreRepo({
        ...repoValue,
        starredList: changedStar
      })
    )
    setStarred(changedStar)
  }

  return (
    <div className="repo-area">
      <div className="search">
        <Input
          placeholder="Search repository..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {searchLoading ? (
        <div style={{ textAlign: 'center', paddingTop: 30 }}>
          <CircularProgress isIndeterminate />
        </div>
      ) : searchData ? (
        <div className="search-result">
          <div className="available-result">
            {repoList.length ? (
              <span>
                Showing {repoList.length} available repository results
              </span>
            ) : (
              <span>We couldn’t find any repositories matching '{search}'</span>
            )}
          </div>
          <RepoList repos={repoList} changeStarred={changeStarred} />
        </div>
      ) : null}
    </div>
  )
}

export default RepoArea
