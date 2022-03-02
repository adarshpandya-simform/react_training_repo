import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { GET_BOOKS } from "../../graphql";
import InfoIcon from "@mui/icons-material/Info";
import BookIcon from "@mui/icons-material/Book";

// BookList: for rendering all the available books
const BookList = () => {
  const { data, error, loading } = useQuery(GET_BOOKS);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  if (error) {
    return <code>{JSON.stringify(error)}</code>;
  }
  return (
    <div>
      <List>
        {data.books.map((book) => (
          <ListItem key={book.bookId} button>
            <ListItemAvatar>
              <IconButton>
                <BookIcon />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary={book.title}
              secondary={`By: ${book.author.name}`}
            />
            <ListItemSecondaryAction>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BookList;
