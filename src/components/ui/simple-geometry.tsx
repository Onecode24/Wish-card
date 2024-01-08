'use client'
import { CSSProperties, FC } from "react";
import Editable from "../editable";
import { GeometryProps } from "@/types";
import { cn } from "@/utils/cn";



const SimpleGeometry : FC<GeometryProps> = ({className,color,width,height,value="Wish"})=>{
    const valuePropoerties: CSSProperties = {
        width,
        height,
        backgroundColor: color 
    }
    return (
        <div className={cn('flex resize',className)}  style={valuePropoerties}  > 
            <Editable value={value} className='font-fit max-h-full overflow-hidden w-full text-center mx-auto my-auto' />
        </div>
    );

}

export default SimpleGeometry;