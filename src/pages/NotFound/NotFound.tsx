import "../../ComponentStyling.css";
import * as Components from "../../components";
import "./NotFound.css";
import '../../General.css';

export default function NotFound() {
    return (
            <div className="main-content">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
    );
}
