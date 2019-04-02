import { withRouter } from "next/router";
import Layout from "../components/MyLayout.js";
import { getPost } from "../api"
import Router from "next/router";
import React from "react";
import Error from 'next/error'

class Content extends React.Component {
  componentDidMount() {
    if (!this.props.post ||!this.props.post.id) {
      return Router.push('/not-found');
    }
  }

  render() {
    if (!this.props.post || !this.props.post.id) {
      return null;
    }

    const { id, name, url, image, type } = this.props.post;

    return (
      <>
        <h1>{`${id} - ${name}`}</h1>
        <div style={{ display: "flex" }}>
          <div>
            <img src={image.medium} style={{ maxWidth: "50%" }} />
          </div>
          <div>
            <ul>
              {[{ name }, { url }, { type }].map((el, idx) => (
                <li key={idx}>{`${Object.keys(el)[0]} = ${
                  Object.values(el)[0]
                }`}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const Post = props => (
  <Layout>
    <Content {...props} />
  </Layout>
);

Post.getInitialProps = ({ pathname, query, asPath, req, res, err }) => {
  try {
    return getPost(query.id)
  } catch (error) {
    return null
  }
};

export default withRouter(Post);
