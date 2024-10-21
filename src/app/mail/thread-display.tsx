'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import useThreads from '@/hooks/use-threads'
import { Archive, ArchiveX, Clock, MoreVertical, Trash2 } from 'lucide-react'
import React from 'react'

const ThreadDisplay = () => {
    const { threadId, threads } = useThreads()
    const thread = threads?.find(t => t.id === threadId)
    return (
        <div className='flex flex-col h-full'>
            <div className='fle items-center p-2'>
                <div className="flex items-center gap-2">
                    <Button variant={'ghost'} size='icon' disabled={!thread}>
                        <Archive className='size-4' />
                    </Button>
                    <Button variant={'ghost'} size='icon' disabled={!thread}>
                        <ArchiveX className='size-4' />
                    </Button>
                    <Button variant={'ghost'} size='icon' disabled={!thread}>
                        <Trash2 className='size-4' />
                    </Button>
                </div>
                <Separator orientation='vertical' className='ml-2' />
                <Button className='ml-2' variant={'ghost'} size='icon' disabled={!thread}>
                    <Clock className='size-4' />
                </Button>
                <div className="flex items-center ml-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button className='ml-2' variant={'ghost'} size='icon' disabled={!thread}>
                                <MoreVertical className='size-4' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" >
                            <DropdownMenuItem>Marcar como lido</DropdownMenuItem>
                            <DropdownMenuItem>Star thread</DropdownMenuItem>
                            <DropdownMenuItem>Add label</DropdownMenuItem>
                            <DropdownMenuItem>Mute thread</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>

            </div>

        </div>
    )
}

export default ThreadDisplay
