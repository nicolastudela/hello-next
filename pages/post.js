import { withRouter } from "next/router";
import Layout from "../components/MyLayout.js";

const Content = props => {
  const { id, name, url, image, type } = props.post;

  return (
    <>
      <h1>{`${id} - ${name}`}</h1>
      <div style={{display: 'flex'}}>
        <div>
          <img src={image.medium} style={{'maxWidth': '50%'}}/>
        </div>
        <div>
          <ul>
            {[{name}, {url}, {type}].map((el,idx) => (<li key={idx}>{`${Object.keys(el)[0]} = ${Object.values(el)[0]}`}</li>))}
          </ul>
        </div>
      </div>
    </>
  );
};

const Post = props => (
  <Layout>
    <Content {...props} />
  </Layout>
);

Post.getInitialProps = async ({ pathname, query, asPath, req, res, err }) => {
  console.log({ pathname, query, asPath, req, res, err });

  const data = await fetch(`https://api.tvmaze.com/shows/${query.id}`);
  const json = await data.json();
  return { post: json };
};

export default withRouter(Post);

