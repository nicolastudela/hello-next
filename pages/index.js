import Layout from "../components/MyLayout.js";
import PostList from "../components/PostsList.js";
import { Box } from '../uiLibrary'
import { getShowsByQuery } from '../api'

const Index = props =>  (
  <Layout >
    <h1>My Shows</h1>
    <Box display='flex' justifyContent='space-arround'>
      {props.showsByQuery.map( show => (
      <Box key={show.query}>
        <PostList title={show.query} shows={show.data} />
      </Box>
        ))}
    </Box> 
  </Layout>
);

Index.getInitialProps = function() {
  return getShowsByQuery(['Batman', 'Superman', 'Spiderman'])
};

export default Index;
