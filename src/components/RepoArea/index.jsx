import { CircularProgress, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAxios } from '../../_common/_services'
import RepoList from '../RepoList'
import './index.css'

const RepoArea = () => {
  const [search, setSearch] = useState('react')
  const [repoList, setRepoList] = useState([])
  const [starred, setStarred] = useState([])

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
      console.log('preparedItems', preparedItems)
    }
  }, [searchData])

  const changeStarred = (item, isStarred) => {
    console.log('isStarred', item, isStarred)
    changedList(item, isStarred)
    changedStar(item, isStarred)
  }

  const changedList = (item, status) => {
    const list = repoList.map((repo) => {
      if (repo.id === item.id) {
        return {
          ...repo,
          isStarred: status
        }
      }
      return repo
    })
    setRepoList(list)
  }

  const changedStar = (item, status) => {
    let changedStar = starred
    if (status) {
      changedStar.push(item)
    } else {
      changedStar = starred.filter((star) => star.id !== item.id)
    }
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
        <CircularProgress isIndeterminate />
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
