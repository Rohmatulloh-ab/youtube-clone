
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams}from 'react-router-dom'
import detailAction from '../redux/actions/DetailData'
import DetailCard from '../components/DetailCard'
const Detail = () => {
const {id} = useParams()
const dispatch = useDispatch()
const {getVideo} = useSelector(state=>state.getVideo)


useEffect(()=>{
  dispatch(detailAction(id))     
},[dispatch,id])

console.log(getVideo,'getvideo');
  return (
    <div className='ml-[200px] rounded-lg flex items-center'>
      {
        getVideo?.items?.map((videyo,i)=>(
          <DetailCard key={i} videyo={videyo}/>

        ))
      }
    </div>
  )
}

export default Detail
