import { cn } from "@/utils/cn";
import { FC, HTMLAttributes } from "react";

type EditableProps = {
    value? : string;
    editable? : 'true' | 'false';
    className?: HTMLAttributes<Element>['className'];
}

const Editable : FC<EditableProps> = ({ value, editable='true',className}) => {
    return (
        <span contentEditable={editable} className={cn('outline-none',className)}  >
            {value}
        </span>
    )
}

export default Editable