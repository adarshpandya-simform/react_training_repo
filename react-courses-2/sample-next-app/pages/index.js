import Link from "next/link";

const index = () => {
  return (
    <div>
      <p>Hello next</p>
      <Link href={"/news"}>go to news tab</Link>
      <Link href={"/about"}>go to about tab</Link>
    </div>
  );
};

export default index;
