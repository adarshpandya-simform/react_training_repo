import { useQuery } from "@apollo/client";
import {
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { GET_AUTHORS } from "../../graphql";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getBooksString, trimText } from "../../utils";

// AuthorList: for rendering all available authors
const AuthorList = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS);

  if (loading) {
    return <CircularProgress color="primary" />;
  }

  if (error) {
    return <code>{JSON.stringify(error)}</code>;
  }

  return (
    <div>
      <List>
        {data.authors.map((author) => (
          <ListItem key={author.authorId} button>
            <ListItemAvatar>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary={author.name}
              secondary={trimText(`Written: ${getBooksString(author.books)}`)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AuthorList;
