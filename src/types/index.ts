import { HTMLAttributes } from "react";


export interface GeometryProps {
    value?: string;
    className?: string;
    color?: string;
    width?: number;
    height?: number;
    id: HTMLAttributes<HTMLElement>["id"];
}