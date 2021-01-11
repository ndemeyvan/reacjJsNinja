import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import reactImage from "../react.jpg";



class HomePage extends Component {
  state = {
    posts: [],
  };
  ///cpmponent life cycle  , quand le component est monte
  componentDidMount() {
    console.log("Componet mounted in home component...");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("Response : ", response);
      this.setState({
        posts: response.data,
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList =
      posts.length > 0 ? (
        posts.map((post) => {
            return (
              <div className="col-md-6 post" key={post.id}>
                <div className="card">
                  <img src={reactImage} class="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <Link to={"/" + post.id}>
                      <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <p className="card-text">{post.body}</p>
                    <a className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            );
        })
      ) : (
        <div className="text-center"> No post </div>
      );
    return (
      <div className="container home">
        <h4 className="center">Home Page</h4>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <div className="row">{postList}</div>
      </div>
    );
  }
}

export default HomePage;
