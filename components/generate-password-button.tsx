import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "./ui/slider"
import { useState } from "react"
import { Badge } from "./ui/badge"

interface customPasswordParamsTypes {
    lowerCaseSliderValue: number;
    upperCaseSliderValue: number;
    digitSliderValue: number;
    symbolSliderValue: number;
}

interface GeneratePasswordButtonProps {
    setPasswordParams: React.Dispatch<React.SetStateAction<customPasswordParamsTypes>>;
}

export const GeneratePasswordButton: React.FC<GeneratePasswordButtonProps> = ({ setPasswordParams }) => {
    const defaultValue = 4
    const [lowerCaseSliderValue, setLowerCaseSliderValue] = useState(defaultValue)
    const [upperCaseSliderValue, setUpperCaseSliderValue] = useState(defaultValue)
    const [digitSliderValue, setDigitSliderValue] = useState(defaultValue)
    const [symbolSliderValue, setSymbolSliderValue] = useState(defaultValue)
    const [savedChanges, setSavedChanges] = useState(false)

    const handleLowerCaseSliderValue = (value: number[]) => {
        setLowerCaseSliderValue(value[0])
    }
    const handleUpperCaseSliderValue = (value: number[]) => {
        setUpperCaseSliderValue(value[0])
    }
    const handleDigitSliderValue = (value: number[]) => {
        setDigitSliderValue(value[0])
    }
    const handleSymbolSliderValue = (value: number[]) => {
        setSymbolSliderValue(value[0])
    }

    const handlePasswordParamsSubmit = () => {
        const newPasswordParams: customPasswordParamsTypes = {
            lowerCaseSliderValue,
            upperCaseSliderValue,
            digitSliderValue,
            symbolSliderValue
        }
        setPasswordParams(newPasswordParams)
        setSavedChanges(true)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">here</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Customize your password</DialogTitle>
                    <DialogDescription>
                        Adjust the parameters you want your password to fit
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-8 items-center gap-4">
                        <Label htmlFor="lowercase" className="text-right col-span-2">
                            Lowercase letters
                        </Label>
                        <Slider className="col-span-5" defaultValue={[defaultValue]} max={8} step={1} onValueChange={handleLowerCaseSliderValue} />
                        <Badge variant="outline" className="col-span-1">{lowerCaseSliderValue}</Badge>
                    </div>
                    <div className="grid grid-cols-8 items-center gap-4">
                        <Label htmlFor="uppercase" className="text-right col-span-2">
                            Uppercase letters
                        </Label>
                        <Slider className="col-span-5" defaultValue={[defaultValue]} max={8} step={1} onValueChange={handleUpperCaseSliderValue} />
                        <Badge variant="outline" className="col-span-1">{upperCaseSliderValue}</Badge>
                    </div>
                    <div className="grid grid-cols-8 items-center gap-4">
                        <Label htmlFor="uppercase" className="text-right col-span-2">
                            Digits
                        </Label>
                        <Slider className="col-span-5" defaultValue={[defaultValue]} max={8} step={1} onValueChange={handleDigitSliderValue} />
                        <Badge variant="outline" className="col-span-1">{digitSliderValue}</Badge>
                    </div>
                    <div className="grid grid-cols-8 items-center gap-4">
                        <Label htmlFor="uppercase" className="text-right col-span-2">
                            Symbols
                        </Label>
                        <Slider className="col-span-5" defaultValue={[defaultValue]} max={8} step={1} onValueChange={handleSymbolSliderValue} />
                        <Badge variant="outline" className="col-span-1">{symbolSliderValue}</Badge>
                    </div>


                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            onClick={handlePasswordParamsSubmit}>
                            Save changes
                        </Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
