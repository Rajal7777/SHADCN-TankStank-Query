"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";


const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    return (
        <div>
            <h1 className="text-lg font-medium mb-2">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, 'ppp') : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}

                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="mt-4 max-h-140 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4 ring-0 border  border-black">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur.
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    );
};

export default TodoList;
