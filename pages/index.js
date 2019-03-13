import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import PostList from "../components/PostsList.js";
import { Box } from '../uiLibrary'


const Index = props => (
  <Layout >
    <h1>My Blog</h1>
    <Box display='flex' justifyContent='space-arround'>
      <Box>
        <PostList title={'Batman'} shows={props.shows.batman} />
      </Box>
      <Box>
        <PostList title={'Superman'} shows={props.shows.superman} />
      </Box>
    </Box> 
  </Layout>
);

Index.getInitialProps = async function() {
  const batmanSearchQuery = fetch("https://api.tvmaze.com/search/shows?q=batman");
  const batmanDataProm = batmanSearchQuery.then(res => res.json());

  const supermanSearchQuery = fetch("https://api.tvmaze.com/search/shows?q=superman");
  const supermanDataProm = supermanSearchQuery.then(res => res.json());

  const [batmanData, supermanData] = await Promise.all([batmanDataProm,supermanDataProm])
  
  return {
    shows: 
      {
        batman: batmanData,
        superman: supermanData,
      }
  }
};

export default Index;
