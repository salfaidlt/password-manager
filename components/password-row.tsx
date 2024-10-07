import React from 'react'
import PasswordInput from './password-input'
import CopyToClipboard from './copy-to-clipboard'
import { Separator } from './ui/separator'
import EditPassword from './edit-password'

interface passwordObjectType {
    id: number;
    label: string;
    description: string;
    password: string
}

const PasswordRow = (Password: passwordObjectType) => {
    return (
        <div>
            <div className="flex justify-evenly items-center py-2">
                <p>{ Password.label }</p>
                <PasswordInput password={Password.password} />
                <CopyToClipboard password={Password.password} />
                <EditPassword id={Password.id} />
            </div>
            <Separator />
        </div>
    )
}

export default PasswordRow