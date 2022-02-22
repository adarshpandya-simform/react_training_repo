import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { IUser } from "../utils/userData";

const UserList: FC<{ users: IUser[] }> = ({ users = [] }) => {
  return (
    <List>
      {users.map((user: IUser) => (
        <>
          <ListItem button key={user.dob.date}>
            <ListItemAvatar>
              <Avatar src={user.picture.large} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
              secondary={user.login.username}
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default UserList;
