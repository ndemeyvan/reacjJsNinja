import React, { Component } from "react";
// import axios from "axios";
import { connect } from 'react-redux';

class PostDetail extends Component {
  state = {
    post: null,
  };
  componentDidMount() {
    // let id = this.props.match.params.post_id;
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts/" + id)
    //   .then((response) => {
    //     console.log("Response : ", response);
    //     this.setState({
    //       post: response.data,
    //     });
    //   });

    console.log("This is the parameter in the props : ", this.props);
  }
  render() {
    
    const post =
      this.props.post !== null ? (
        <div>
          <h4>{this.props.post.title}</h4>
          <h4>{this.props.post.body}</h4>
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
const mapStateToProps = (state,ownProps) => {
  var id = ownProps.match.params.post_id;
    return {
      post: state.posts.find(((post) => post.id == id))
    }
}
export default connect(mapStateToProps)(PostDetail);
