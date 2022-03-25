import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href={"/characters/1"}>View All the Characters</Link>
      <Link href={"https://rickandmortyapi.com/graphql"}>Go to GQL Api</Link>
    </div>
  );
};

export default Home;