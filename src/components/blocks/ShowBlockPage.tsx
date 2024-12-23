import GetBlockById from './GetBlockById'
import { useParams } from 'react-router-dom'

export default function ShowBlockPage() {
    const {id} = useParams<{id:string}>()
    console.log("ID:"+ id)
  return (
    <GetBlockById id={id || ""}/>
  )
}
