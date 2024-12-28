"use client"
import GetSnippetById from '@/components/snippets/GetSnippetById';
import { useParams } from 'next/navigation'
import React from 'react'

export default function ShowSnippetPage() {

    const {id } = useParams();
  return (
    <GetSnippetById id={id as string}/>
  )
}
