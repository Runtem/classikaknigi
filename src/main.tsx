import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ComponentStyling.css";
import * as Components from "./components";
import type {
    LinkInterface,
    NotificationInterface,
} from "./components/Topbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

const topbar_links: Omit<LinkInterface, "isCurrent">[] = [
    {
        icon: "https://placehold.co/50x50",
        title: "Home",
        url: "",
    },
    {
        icon: "https://placehold.co/50x50",
        title: "boy",
        url: "boy",
    },
];

const currentUrl = window.location.pathname;

const topbar_links_with_current: LinkInterface[] = topbar_links.map((link) => ({
    ...link,
    isCurrent: `/${link.url}` === currentUrl,
}));

const topbar_notifications: NotificationInterface[] = [
    {
        timestamp: 18939546,
        title: "hey mf",
        description: "wawa",
        link: "#",
    },
];

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Components.Topbar
            links={topbar_links_with_current}
            notifications={topbar_notifications}
        ></Components.Topbar>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
