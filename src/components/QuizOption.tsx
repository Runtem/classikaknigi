import { BaseButton } from "./Button";

interface QuizOptionInterface {
    letter: string;
    answer: string;
}

export default function QuizOption({ letter, answer }: QuizOptionInterface) {
    return (
        <BaseButton
            onClick={() => {}}
            colorClass="white"
            className="quiz-option"
        >
            <p className="quiz-letter">{letter}.</p>
            <p className="quiz-answer">{answer}</p>
        </BaseButton>
    );
}
