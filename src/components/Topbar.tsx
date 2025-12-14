import TopbarCell from "./TopbarCell";
import TopbarNotification from "./TopbarNotification";

interface Link {
    icon: string;
    title: string;
    isCurrent: boolean;
}

interface Notification {
    timestamp: number;
    title: string;
    description: string;
    link: string;
}

interface TopbarInterface {
    links: Array<Link>;
    notifications: Array<Notification>;
}

export default function Topbar({ links, notifications }: TopbarInterface) {
    return (
        <div id="topbar">
            <div className="topbar-main">
                <div id="topbar-logo">
                    <img
                        src="./klassikaknigiIcon.png"
                        alt=""
                        width={79}
                        height={72}
                    />
                    <h2>КлассикаКниги</h2>
                </div>
                {links.map((link) => {
                    return (
                        <TopbarCell
                            icon={link.icon}
                            title={link.title}
                            isSelected={link.isCurrent}
                        />
                    );
                })}
            </div>
            <button id="topbar-notification" popoverTarget="auto">
                <img
                    src="./icons/notification_icon.png"
                    alt="Notification icon"
                    width={70}
                    height={70}
                />
                <div id="topbar-notifications" popover="auto">
                    {notifications.map((notification) => {
                        return (
                            <TopbarNotification
                                unixTimestamp={notification.timestamp}
                                notifTitle={notification.title}
                                notifDescription={notification.description}
                                notifLink={notification.link}
                            ></TopbarNotification>
                        );
                    })}
                </div>
            </button>
        </div>
    );
}
