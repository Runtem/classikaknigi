import "../../ComponentStyling.css";
import * as Components from "../../components";
import "./Home.css";
import '../../General.css';

export default function Home() {
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
            id: 2,
        },
        {
            author: "nana",
            cover: `https://placehold.co/${width}x${height}`,
            title: "rgergregrthtyjtrjuitrytyjhuijyhjruyhjiyjiioyjioytjioyrjhioio",
            id: 3,
        },
        {
            author: "nana",
            cover: `https://placehold.co/${width}x${height}`,
            title: "rgergregrthtyjtrjuitrytyjhuijyhjruyhjiyjiioyjioytjioyrjhioio",
            id: 4,
        },
    ];
    return (
            <div className="main-content">
                <Components.QuizOption
                    letter="A"
                    answer="b"
                ></Components.QuizOption>
                <Components.BookRow
                    books={book_row_table}
                    rowTitle="Пример ряда книг"
                ></Components.BookRow>
                <Components.Button colorClass="green" buttonLabel="hi" onClick={() => {}}></Components.Button>
                <Components.Dropdown onChoiceSelect={() => {}} choices={["Hi", "Hello", "awawefgrthrt3wg"]}></Components.Dropdown>
                <Components.Chip title="Hi" isSelected={true}></Components.Chip>
            </div>
    );
}
