import Link from "next/link"
import { Button } from "./ui/button"
import { CirclePlus, List } from "lucide-react"

const MenuOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-1/4">
        <Link href="/all" className="flex flex-col justify-center items-center py-2 border-foreground border-2 hover:border-stone-600">
            <List />
            <Button variant="link">Alls passwords</Button>
        </Link>
        <Link href="/new-password" className="flex flex-col justify-center items-center py-2 border-foreground border-2 hover:border-stone-600">
            <CirclePlus />
            <Button variant="link">Add new</Button>
        </Link>
    </div>
  )
}

export default MenuOptions