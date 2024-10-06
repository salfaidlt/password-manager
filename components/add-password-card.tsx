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
import { useState } from "react"
import generateStrongPassword from "@/lib/functions"
import { GeneratePasswordButton } from "./generate-password-button"

interface customPasswordParamsTypes {
    lowerCaseSliderValue: number;
    upperCaseSliderValue: number;
    digitSliderValue: number;
    symbolSliderValue: number;
}

export function AddPassword() {
    const [password, setPassword] = useState("")
    const [passwordParams, setPasswordParams] = useState<customPasswordParamsTypes>({
        lowerCaseSliderValue: 0,
        upperCaseSliderValue: 0,
        digitSliderValue: 0,
        symbolSliderValue: 0,
    })

    const generateNewPassword = () => {
        // setPassword(generateStrongPassword())
        alert(passwordParams.digitSliderValue)
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
                            <Input id="label" placeholder="a label associated to the password" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="a description to help you remind what is this password used for" />
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
                <Button onClick={generateNewPassword}>Submit</Button>
            </CardFooter>
        </Card>
    )
}
