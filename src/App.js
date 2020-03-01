import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title-bold">{post.title}</span>
              <p className="card-body  blue-text">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center amber-text">No posts yet!</div>
    );

    return (
      <div className="container">
        <h4 className=" center orange-text">POSTS</h4>
        {postList}
      </div>
    );
  }
}

export default App;
