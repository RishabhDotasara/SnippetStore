import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/ToolTip'

type ToolTipProps = {
    content: string,
    trigger: React.ReactNode
}

export default function ToolTip({content, trigger}:ToolTipProps) {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                {trigger}
            </TooltipTrigger>
            <TooltipContent>
                {content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
