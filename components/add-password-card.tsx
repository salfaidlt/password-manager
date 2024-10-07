"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"
import generateStrongPassword from "@/lib/functions"
import { GeneratePasswordButton } from "./generate-password-button"
import { db } from "@/lib/db"

interface customPasswordParamsTypes {
    lowerCaseSliderValue: number;
    upperCaseSliderValue: number;
    digitSliderValue: number;
    symbolSliderValue: number;
}

interface passwordObjectType {
    label: string;
    description: string;
    password: string
}

export function AddPassword() {
    const [password, setPassword] = useState("")
    const [label, setLabel] = useState("")
    const [description, setDescription] = useState("")

    const [passwordParams, setPasswordParams] = useState<customPasswordParamsTypes>({
        lowerCaseSliderValue: 0,
        upperCaseSliderValue: 0,
        digitSliderValue: 0,
        symbolSliderValue: 0,
    })
    useEffect(() => {
        setPassword(generateStrongPassword(
            passwordParams.lowerCaseSliderValue,
            passwordParams.upperCaseSliderValue,
            passwordParams.digitSliderValue,
            passwordParams.symbolSliderValue
        ))
    }, [passwordParams])

    async function saveNewPassword () {
        let passwordRecord: passwordObjectType = {
            label,
            description,
            password
        }
        
        const id = await db.passwords.add(passwordRecord)
    }
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>New password</CardTitle>
                <CardDescription>add a new password or generate one</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="label">Label</Label>
                            <Input 
                                id="label" 
                                placeholder="a label associated to the password" 
                                value={label}
                                onChange={ (e) => setLabel(e.target.value) }
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Textarea 
                                id="description" 
                                placeholder="a description to help you remind what is this password used for" 
                                value={description}
                                onChange={ (e) => setDescription(e.target.value) }
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">
                                Type password or generate
                                <GeneratePasswordButton setPasswordParams={setPasswordParams} />
                            </Label>
                            <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="type or generate a password" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button onClick={saveNewPassword}>Submit</Button>
            </CardFooter>
        </Card>
    )
}
