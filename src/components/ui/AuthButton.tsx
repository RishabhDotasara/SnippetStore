import React from 'react'
import { Button } from './Button'
import GithubIcon from '../icons/GithubIcon'

type AuthButtonProps = {
    onClick:()=>{}
}

export default function AuthButton() {
  return (
    <Button>
        <GithubIcon className='h-4 w-4'/>
    </Button>
  )
}
