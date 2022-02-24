import Head from "next/head";
import styles from "../styles/Home.module.css";

// Home Page renders @ /
export default function Home() {
  return (
    <div>
      <Head>
        <title>Todos App | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home Page</h2>
      <hr />
      <br />
      <p>this is homepage</p>
    </div>
  );
}