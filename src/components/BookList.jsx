import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = props => {
  return (
    <Container>
      <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {props.books.map((book, index) => (
          <SingleBook book={book} key={book.asin + index} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
