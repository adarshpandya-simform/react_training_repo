import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import type { NextPage } from "next";
import { useMemo } from "react";
import Head from "next/head";
import withPrivateRoute from "../components/withPrivateRoute";
import axios from "axios";
import styles from "../styles/Home.module.css";
import UserList from "../components/UserList";

const Home: NextPage = (props: any) => {
  const users = useMemo(() => props.props.users.results, []);

  return (
    <div className="page-container">
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./chat.svg" />
      </Head>

      <Paper
        sx={{ display: "flex", maxHeight: 500, minWidth: 700 }}
        elevation={7}
      >
        <div className={styles.chat_users}>
          <UserList users={users} />
        </div>
        <div className={styles.chat_area}>chat area</div>
      </Paper>
    </div>
  );
};

Home.getInitialProps = async () => {
  const { data } = await axios.get("https://randomuser.me/api/?results=12");
  return {
    props: {
      users: data,
    },
  };
};

export default withPrivateRoute(Home);
