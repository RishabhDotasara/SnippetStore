
import { useParams } from 'next/navigation'
import GetBlockById from './GetBlockById'

export default function ShowBlockPage() {
    const {id} = useParams<{id:string}>()
    console.log("ID:"+ id)
  return (
    <GetBlockById id={id || ""}/>
  )
}
