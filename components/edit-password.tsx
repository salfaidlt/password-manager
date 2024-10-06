import { Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const EditPassword = () => {
    return (
        <Link href="">
            <Button variant="ghost">
                <Pencil />
            </Button>
        </Link>
    )
}

export default EditPassword