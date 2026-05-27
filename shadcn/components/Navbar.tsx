import { LogOut, Moon, Settings, User } from "lucide-react";
import Link from "next/link";
import {
    BadgeCheckIcon,
    BellIcon,
    CreditCardIcon,
    LogOutIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
    return (
        <nav className="p-4 flex items-center justify-between">
            {/* LEFT */}
            collapsebtn
            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Link href={"/"}>Dashboard</Link>
                <Moon />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                <AvatarFallback>LR</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" sideOffset={10}>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheckIcon />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Setting
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
