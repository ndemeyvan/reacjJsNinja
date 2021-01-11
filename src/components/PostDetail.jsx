import React, { Component } from "react";
import axios from "axios";

class PostDetail extends Component {
  state = {
    post: null,
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log("Response : ", response);
        this.setState({
          post: response.data,
        });
      });

    console.log("This is the parameter in the props: ", this.props);
  }
  render() {
    const post =
      this.state.post !== null ? (
        <div>
          <h4>{this.state.post.title}</h4>
          <h4>{this.state.post.body}</h4>
        </div>
      ) : (
        <div>This post don't exist</div>
      );
    return (
      <div>
        <h4>Route parameter</h4>
        <div>{post}</div>
      </div>
    );
  }
}

export default PostDetail;
