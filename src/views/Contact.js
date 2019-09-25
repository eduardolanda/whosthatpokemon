import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="view">
        <h1>Contact</h1>
        <div className="content">
          <div className="content--inner">
            <h2>Hello, Stranger!</h2>
            Do you want to contact me? I guess that's why you are here and you
            can contact me on my LinkedIn.
            <h2>LinkedIn</h2>
            <ul>
              <li>
                My profile is{" "}
                <a href="www.linkedin.com/in/eduardolanda">
                  linkedIn/eduardolanda
                </a>
              </li>
              <li>You can DM and we can keep in touch.</li>
            </ul>
            <h2>Github</h2>
            <ul>
              <li>
                My Github Repo{" "}
                <a href="www.github.com/eduardolanda">Github/eduardolanda</a>
              </li>
              <li>You can follow my repository and check my code.</li>
            </ul>
            <h2>Are you hiring or do you have a project in mind?</h2>
            We can work and create amazing projects using different tech, check
            my multiple projects on my profile.
            <h2>
              Send me an{" "}
              <span role="img" aria-label="E-Mail">
                📧
              </span>
              : <br />
              <a href="mailto:eduardo.landa@outlook.com">@eduardo</a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
