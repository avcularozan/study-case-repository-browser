import { CircularProgress, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAxios } from '../../_common/_services'
import RepoList from '../RepoList'
import './index.css'

const RepoArea = () => {
  const [search, setSearch] = useState('react')

  const [{ data: searchData, loading: searchLoading }, getSearchRequest] =
    useAxios(
      {
        url: `/search/repositories?q=${search}`,
        method: 'GET'
      },
      { manual: true }
    )

  useEffect(() => {
    if (search.length) getSearchRequest()
  }, [search])

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
            {searchData?.items?.length ? (
              <span>
                Showing {searchData?.items?.length} available repository results
              </span>
            ) : (
              <span>We couldn’t find any repositories matching '{search}'</span>
            )}
          </div>
          <RepoList repos={searchData?.items} />
        </div>
      ) : null}
    </div>
  )
}

export default RepoArea
