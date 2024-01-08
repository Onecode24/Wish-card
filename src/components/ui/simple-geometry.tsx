import { FC } from "react";
import Editable from "../editable";
import { GeometryProps } from "@/types";

const SimpleGeometry : FC<GeometryProps> = ({className,color,width,height})=>{
    return (
        <div className={className} color={color} >
            <Editable value="Wish" className={className} />
        </div>
    );

}

export default SimpleGeometry;