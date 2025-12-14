interface BookCellProps {
    bookTitle: string;
    bookAuthor: string;
    bookImage: string;
    bookID?: number;
    bookCoverWidth?: number
}

export default function BookCell({
    bookTitle,
    bookAuthor,
    bookImage,
    bookID = 1,
    bookCoverWidth = 150
}: BookCellProps) {
    return (
        <a className="bookCell" href={`/books/${bookID}`}>
            <img src={bookImage} alt={`${bookTitle} book cover`} width={bookCoverWidth} height={bookCoverWidth * 1.6}/>
            <p className="book-author">{bookAuthor}</p>
            <h3 className="book-title">{bookTitle}</h3>
        </a>
    );
}
