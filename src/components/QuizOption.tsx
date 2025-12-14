import { BaseButton } from './Button';

interface QuizOptionInterface {
    letter: string;
    answer: string;
}

export default function QuizOption({ letter, answer }: QuizOptionInterface) {
    return (
        <BaseButton onClick={() => {}}>
            <div className="quiz-content">
                <p className="quiz-letter">{letter}.</p>
                <div className="quiz-line"></div>
                <p className="quiz-answer">{answer}</p>
            </div>
        </BaseButton>
    );
}