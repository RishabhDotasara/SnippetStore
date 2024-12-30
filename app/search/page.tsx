import Loader from '@/components/Loader'
import Search from '@/components/search-page/Search'
import React, { Suspense } from 'react'

export default function SearchPage() {
  return (
    <Suspense fallback={<Loader text='Loading...'/>}>
      <Search/>
    </Suspense>
  )
}
