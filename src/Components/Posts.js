import React from 'react';
import axios from 'axios';
import "./Posts.css";



export default class Posts extends React.Component {
  
    state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/darnocer/gists?per_page=100`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (

   
      <div className="container">
        {
          this.state.posts
            .map(post =>
              <a className="link" href={post.html_url} target="_blank">
              <div key={post.id} className="card">
                  {post.description.includes("React") ? <div className="tag-react">React</div> : null}
                  {post.description.includes("Git") ? <div className="tag-git">Git</div> : null}
                  {post.description.includes("CSS") ? <div className="tag-css">CSS</div> : null}
                    <p className="title">{post.description}</p>
                </div>
            </a>
            )
        }
      </div>
    
   
    )
  }
}