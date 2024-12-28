"use client"
import GetBlockById from '@/components/blocks/GetBlockById'
import { useParams } from 'next/navigation';
import React from 'react'


export default function ShowBlockPage() {
    const {id} = useParams();
  return (
    <GetBlockById id={id as string}/>
  )
}
