import { NotionRenderer, BlockMapType } from "../package/react-notion/src";
import Head from "next/head";
import fetch from "node-fetch";

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    "https://notion-api.splitbee.io/v1/page/f99adfb4aa1c4366869be67508a5ff1c"
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    }
  };
}

const Home = ({ blockMap }) => (
  <div
    style={{
      maxWidth: 708,
      margin: "0 auto",
      padding: "0 8px",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
    }}
  >
    <Head>
      <title>react-notion example</title>
    </Head>
    <NotionRenderer blockMap={blockMap} />
  </div>
);

export default Home;
