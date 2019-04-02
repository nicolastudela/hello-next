import fetch from "isomorphic-unfetch";

export const getPost = async id => {
  const data = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const postData = await data.json();

  return { post: postData } ;
};

export const getShowsByQuery = async queries => {
  const dataPromises = queries.map(query => { return fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(json => {
        return {query, data: json}
      });
    });

  const data = await Promise.all(dataPromises);

  return {
    showsByQuery: data
  };
};
