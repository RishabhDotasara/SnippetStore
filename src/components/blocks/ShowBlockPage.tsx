
import toast from 'react-hot-toast'
import GetBlockById from './GetBlockById'
import { useNavigate, useParams } from 'react-router-dom'

export default function ShowBlockPage() {
    const {id} = useParams<{id:string}>()
    const navigate = useNavigate()
    console.log("ID:"+ id)
  return (
    <GetBlockById id={id || ""}/>
  )
}
