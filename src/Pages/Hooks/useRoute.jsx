import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import useRedux from './useRedux';

function useRoute() {
    const params = useParams();
    const [searchParam,setSearchParam] = useSearchParams();
    const location = useLocation();



  return {
    params,
    searchParam,
    setSearchParam,
    location
  }
}

export default useRoute