interface ChipInterface {
    title: string;
    isSelected?: boolean;
}

export default function Chip({ title, isSelected = false }: ChipInterface) {
    return (
        <div className="chip">
            {title}
            {isSelected ?
            <img width={32} height={32}></img> :
            ""}
        </div>
    );
}
