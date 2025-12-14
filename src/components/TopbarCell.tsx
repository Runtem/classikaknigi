interface TopbarCellInterface {
    icon: string,
    title: string,
    isSelected?: boolean
}

export default function TopbarCell({ icon, title, isSelected = false }: TopbarCellInterface) {
    return (
        <div className={`page-cell ${isSelected ? '' : 'cell-selected'}`}>
            <img src={icon} alt="Icon" width={60} height={60}/>
            {title}
        </div>
    )
} 