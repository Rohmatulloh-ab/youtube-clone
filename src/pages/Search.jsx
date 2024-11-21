import { useParams } from "react-router-dom"
import SearchCard from "../components/SearchCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import searchAction from "../redux/actions/SearchData"


const Search = () => {
  const dispatch = useDispatch()
  const {keyword}=useParams()
  const {getSearch}=useSelector(state => state.getSearch)

useEffect(()=>{
  dispatch(searchAction(keyword))

},[dispatch,keyword])


console.log('getSearch',getSearch);

  return (
    <div>

      {getSearch?.items?.map((searcH,id)=>(

      <SearchCard key={id} searcH={searcH}/>
      ))}
    </div>
  )
}

export default Search
