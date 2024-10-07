import { Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const EditPassword = (props: {id: number}) => {
    let path = `/all/${props.id}`
    return (
        <Link href={path}>
            <Button variant="ghost">
                <Pencil />
            </Button>
        </Link>
    )
}

export default EditPassword