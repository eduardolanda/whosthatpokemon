import React, { Component } from "react";

class Author extends Component {
  render() {
    return (
      <h1>
        <div>
          Eduardo <span className="with--accent">Landa </span>
        </div>
        <div>Front-End</div>
        <div>
          Web <span className="with--accent">Developer</span>
        </div>
        <div>
          <span role="img" aria-label="Computer emojis">
            💻🖱️
          </span>
        </div>
      </h1>
    );
  }
}

export default Author;
