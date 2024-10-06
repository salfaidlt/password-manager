"use client"

import { useState } from 'react'
import { Button } from './ui/button'
import { Eye, EyeOff } from 'lucide-react'


const PasswordInput = () => {
    const [toggle, setToggle] = useState(false)
    
    const maskPassword = () => {
        setToggle(!toggle)
    }
    return (
        <div className='flex items-center'>

            <Button variant="ghost" onClick={maskPassword} >
                {toggle ? 
                <div className='flex gap-2'>
                    <EyeOff />
                    <code className='code bg-foreground text-background'>password</code>
                </div> : 
                <div className='flex gap-2'>
                    <Eye />
                    <code className='code bg-foreground text-background'>****</code>
                </div>
                }
            </Button>
            
        </div>
    )
}

export default PasswordInput