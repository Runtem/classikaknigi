interface TopbarCellInterface {
    icon: string;
    title: string;
    isSelected?: boolean;
    url: string;
}

export default function TopbarCell({
    icon,
    title,
    isSelected = false,
    url,
}: TopbarCellInterface) {
    const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

    return (
        <a
            className={`page-cell ${isSelected ? "cell-selected" : ""}`}
            href={normalizedUrl}
        >
            <img src={icon} alt="Icon" width={32} height={32} />
            {title}
        </a>
    );
}
