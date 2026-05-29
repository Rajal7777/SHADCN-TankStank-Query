'use client';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import * as z from "zod"

const formSchema = z.object({
username: z
.string()
.min(5, { message: 'username must be at least 5 character'})
.max(10),
email: z.string().min(10).max(20),
phone: z.string().min(9).max(15),
location: z.string().min(15).max(25),
role: z.enum(['admin', 'user'])
})

const EditUser = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Edit User</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>This action cannot be undone.</SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default EditUser;