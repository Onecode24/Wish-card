'use client'
import { CSSProperties, FC, useEffect } from "react";
import Editable from "../editable";
import { GeometryProps } from "@/types";
import { cn } from "@/utils/cn";

const SimpleGeometry : FC<GeometryProps> = ({className,color,width,height,value="Wish",id})=>{
    const valuePropoerties: CSSProperties = {
        width,
        height,
        backgroundColor: color,
    }
    useEffect(() => {
        placeRandomly();
    }, []);

    function placeRandomly() {
        const div = document.getElementById(`randomDiv-${id}`);
        if (div) {
            const maxX = window.innerWidth - div.clientWidth;
            const maxY = window.innerHeight - div.clientHeight;
      
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            const randomRotation = Math.random() < 0.5 ? Math.floor(Math.random() * 91) : Math.floor(Math.random() * 91) + 270;
      
            div.style.left = `${randomX}px`;
            div.style.top = `${randomY}px`;
            div.style.transform = `rotate(${randomRotation}deg)`;
          }
    }

    return (
        <div className={cn('flex absolute adieu-regular ',className)}  style={valuePropoerties} id={`randomDiv-${id}`} > 
            <Editable value={value} className='font-fit max-h-full overflow-hidden w-full text-center mx-auto my-auto' />
        </div>
    );

}

export default SimpleGeometry;