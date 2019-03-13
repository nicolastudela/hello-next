import Layout from "../components/MyLayout.js";
import { Link } from '../uiLibrary'
import fetch from "isomorphic-unfetch";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      {props.name}
    </Link>
  </li>
);

const Index = props => (
  <Layout >
    <h1>My Blog</h1>
    <h2>Batman TV Shows</h2>
    <>
      <ul >
        {props.shows.map(({ show }) => (
          <PostLink key={show.id} {...show} />
        ))}
      </ul>
    </>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Index;
