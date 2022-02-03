import { Link as Navlink, Typography } from "@mui/material";
import Link from "next/link";
import Head from "next/head";

// HomePage @ / to show info and links to other page
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home - Todo app</title>
      </Head>
      <Typography variant="h4" color={"#1976d2"}>
        Todos
      </Typography>
      <br />
      <Typography variant="body1" color={"GrayText"}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <br />
      <Link href="/add-todo">
        <Navlink href="/add-todo">Add todos</Navlink>
      </Link>
      <br />
      <br />
      <Link href="/todos">
        <Navlink href="/todos">View todos</Navlink>
      </Link>
    </div>
  );
};

export default HomePage;
