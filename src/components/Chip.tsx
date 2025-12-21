import { useState } from "react";

interface ChipInterface {
    title: string;
    isSelected?: boolean;
}

export default function Chip({ title, isSelected = false }: ChipInterface) {
    const [isChipSelected, setIsChipSelected] = useState(isSelected);

    function toggleSelect() {
        setIsChipSelected(!isChipSelected);
    }

    return (
        <button className="chip" onClick={toggleSelect}>
            {title}
            {isChipSelected ?
            <img src="./icons/checkmark.svg" width={20} height={20}/> :
            ""}
        </button>
    );
}