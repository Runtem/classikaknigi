function FormatTime(unixTimestamp: number) {
    const date = new Date(unixTimestamp * 1000);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)

    const intervals = [
        { label: "год(а)", seconds: 31536000 },
        { label: "месяц(ов)", seconds: 2592000 },
        { label: "дней", seconds: 86400 },
        { label: "час(ов)", seconds: 3600 },
        { label: "минут(а)", seconds: 60 },
        { label: "секунд(а)", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label} назад`;
        }
    }

    return `прямо сейчас`
}

interface TopbarNotificationInterface {
    unixTimestamp: number,
    notifTitle: string,
    notifDescription: string,
    notifLink: string
}

export default function TopbarNotification({ unixTimestamp, notifTitle, notifDescription, notifLink="#" }: TopbarNotificationInterface) {
    return (
        <a className="topbar-notif" href={notifLink}>
            <p className="notif-time">{FormatTime(unixTimestamp)}</p>
            <h3>{notifTitle}</h3>
            <p className="notif-description">{notifDescription}</p>
        </a>
    )
}