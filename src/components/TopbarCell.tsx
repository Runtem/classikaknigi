interface TopbarCellInterface {
    icon: string,
    title: string,
    isSelected?: boolean,
    url: string
}

export default function TopbarCell({ icon, title, isSelected = false, url }: TopbarCellInterface) {
    return (
        <a className={`page-cell ${isSelected ? 'cell-selected' : ''}`} href={encodeURIComponent(url)}>
            <img src={icon} alt="Icon" width={32} height={32}/>
            {title}
        </a>
    )
} 