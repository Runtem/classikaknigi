import Button from "./Button";

interface ButtonE {
    icon: string;
    colorClass: string;
    label: string;
}

interface SimplePopupProps {
    popupTitle: string;
    popupDescription: string;
    popupChoices: Array<ButtonE>;
}

interface ComplexPopupProps {
    popupTitle: string;
}

export function SimplePopup({
    popupTitle,
    popupDescription,
    popupChoices,
}: SimplePopupProps) {
    return (
        <div className="popup-bg">
            <div className="popup">
                <div className="popup-topbar">
                    {popupTitle}
                    <button className="close-button">
                        <img
                            src="./icons/x.png"
                            alt="Close button"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
                <p className="popup-description">{popupDescription}</p>
                <div className="popup-buttonChoices">
                    {popupChoices.map((button) => (
                        <Button
                            key={button.label} // or better: button.id if you add it
                            buttonIcon={button.icon}
                            colorClass={button.colorClass}
                            buttonLabel={button.label}
                            onClick={() => {}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function ComplexPopup({ popupTitle }: ComplexPopupProps) {
    return (
        <div className="popup-bg">
            <div className="popup">
                <div className="popup-topbar">
                    {popupTitle}
                    <button className="close-button">
                        <img
                            src="./icons/x.png"
                            alt="Close button"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export function ModalPopup({ popupTitle }: ComplexPopupProps) {
    return (
        <div className="modal-popup">
            <p className="popup-title">{popupTitle}</p>
        </div>
    );
}
