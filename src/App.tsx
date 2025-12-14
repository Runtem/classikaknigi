import "./App.css";
import * as Components from "./components";
import "./ComponentStyling.css";
import type { LinkInterface, NotificationInterface } from './components/Topbar'

export default function App() {
    const width = 160;
    const height = width * 1.6;
    const book_row_table = [
        {
            author: "nana",
            cover: `https://placehold.co/${width}x${height}`,
            title: "rgergregrthtyjtrjuitrytyjhuijyhjruyhjiyjiioyjioytjioyrjhioio",
            id: 1,
        },
        {
            author: "nana",
            cover: `https://placehold.co/${width}x${height}`,
            title: "rgergregrthtyjtrjuitrytyjhuijyhjruyhjiyjiioyjioytjioyrjhioio",
            id: 1,
        },
        {
            author: "nana",
            cover: `https://placehold.co/${width}x${height}`,
            title: "rgergregrthtyjtrjuitrytyjhuijyhjruyhjiyjiioyjioytjioyrjhioio",
            id: 1,
        },
        {
            author: "nana",
            cover: `https://placehold.co/${width}x${height}`,
            title: "rgergregrthtyjtrjuitrytyjhuijyhjruyhjiyjiioyjioytjioyrjhioio",
            id: 1,
        },
    ];
    const topbar_links: LinkInterface[] = [
        {
            icon: `https://placehold.co/50x50`,
            title: "sigma",
            isCurrent: true,
            url: "sigma"
        },
        {
            icon: `https://placehold.co/50x50`,
            title: "wawa",
            isCurrent: false,
            url: "boy"
        }
    ];
    const topbar_notifications: NotificationInterface[] = [
        {
            timestamp: 18939546,
            title: "hey mf",
            description: "wawa",
            link: '#'
        }
    ]
    return (
        <div className="container">
            <Components.Topbar links={topbar_links} notifications={topbar_notifications}></Components.Topbar>
        </div>
    );
}
