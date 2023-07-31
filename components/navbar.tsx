import { UserButton } from "@clerk/nextjs"
import MainNav from "@/components/mainNav"

const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex items-center h-16 px-4">
                <div>
                    This will be a switcher
                </div>
                <MainNav className="mx-6" />

                <div className="ml-auto flex items-center space-x-4">
                    <UserButton />
                </div>
            </div>
        </div>
    )
}

export default Navbar