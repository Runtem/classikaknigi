import BookCell from "./BookCell";

interface Book {
    author: string;
    cover: string;
    title: string;
    id: number;
}

interface BookRowProps {
    books: Book[];
    rowTitle?: string;
    bookCoverWidth?: number;
}

export default function BookRow({ books, rowTitle = "Example", bookCoverWidth = 150 }: BookRowProps) {
    return (
        <div className="book-row">
            <h2 className="bookrow-title">{rowTitle}</h2>
            <div className="bookrow-contents">
                {books.map((book) => (
                    <BookCell
                        key={book.id}
                        bookAuthor={book.author}
                        bookImage={book.cover}
                        bookTitle={book.title}
                        bookID={book.id}
                        bookCoverWidth={bookCoverWidth}
                    />
                ))}
            </div>
        </div>
    );
}