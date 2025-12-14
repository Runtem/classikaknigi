import TopbarCell from "./TopbarCell";
import TopbarNotification from "./TopbarNotification";

export interface LinkInterface {
    icon: string;
    title: string;
    isCurrent: boolean;
    url: string;
}

export interface NotificationInterface {
    timestamp: number;
    title: string;
    description: string;
    link: string;
}

export interface TopbarInterface {
    links: Array<LinkInterface>;
    notifications: Array<NotificationInterface>;
}

export default function Topbar({ links, notifications }: TopbarInterface) {
    return (
        <div id="topbar">
            <div className="topbar-main">
                <div id="topbar-logo">
                    <img
                        src="./icons/classika_knigi.png"
                        alt=""
                        width={48}
                        height={48}
                    />
                    <h2>КлассикаКниги</h2>
                </div>
                {links.map((link) => {
                    return (
                        <TopbarCell
                            key={link.title}
                            icon={link.icon}
                            title={link.title}
                            isSelected={link.isCurrent}
                            url={link.url}
                        />
                    );
                })}
            </div>
            <button
                id="topbar-notification"
                popoverTarget="topbar-notifications"
            >
                <img
                    src="./icons/bell_icon.png"
                    alt="Notification icon"
                    width={32}
                    height={32}
                />
            </button>
            <div id="topbar-notifications" popover="auto">
                {notifications.map((notification) => {
                    return (
                        <TopbarNotification
                            key={notification.title}
                            unixTimestamp={notification.timestamp}
                            notifTitle={notification.title}
                            notifDescription={notification.description}
                            notifLink={notification.link}
                        ></TopbarNotification>
                    );
                })}
            </div>
        </div>
    );
}
