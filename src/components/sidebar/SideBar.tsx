import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ElementSideBar } from "./elementSideBar";

import { useState } from 'react';

export const SideBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[6%] hover:w-[20%] p-4 flex flex-col h-full bg-[#1c8ce7] transition-all duration-500 ease-in-out items-center gap-1 overflow-hidden divide-y divide-white-100 "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            
            <div className="w-[50px] h-[50px] rounded-full flex justify-center">
                <Avatar>
                    <AvatarImage src="https://github.com/mariop06.png" alt="@shadcn" />
                    <AvatarFallback>Mario</AvatarFallback>
                </Avatar>
            </div> {/*CRIAR UM COMPONENTE QUE FACA ISSO */}

            <ElementSideBar isHovered={isHovered} />

        </div>
    );
}

