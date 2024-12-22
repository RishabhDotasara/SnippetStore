import clsx from 'clsx';
import React from 'react'

type LanguageIconProps = {
    language:string;
    className?:string;
}

export default function LanguageIcon({language, className}:LanguageIconProps) {
  return (
    <i className={clsx(`devicon-${language}-plain colored text-xl`, className)}></i>
  )
}
