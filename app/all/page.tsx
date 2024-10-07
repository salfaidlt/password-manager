"use client"

import PasswordRow from "@/components/password-row"
import { ScrollArea } from "@/components/ui/scroll-area"
import { db } from "@/lib/db"
import { useLiveQuery } from "dexie-react-hooks"

interface passwordObjectType {
    id: number;
    label: string;
    description: string;
    password: string
}

const AllPasswords = () => {
    const passwords: passwordObjectType[] | undefined = useLiveQuery(() => db.passwords.toArray())
    return (
        <div className="h-auto flex flex-col justify-center items-center">
            <ScrollArea className="w-4/5 h-auto border-foreground">
                { passwords?.map((password) => (
                    // <PasswordRow Password={password} />
                    <PasswordRow {...password} />
                )) }
            </ScrollArea>
        </div>
    )
}

export default AllPasswords