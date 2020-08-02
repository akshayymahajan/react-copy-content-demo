import React, { Component } from "react";
import ClickToCopy from "react-copy-content";

export default class App extends Component {
  state = {
    customSuccesss: "",
  };
  componentDidMount() {
    this.mounted = true;
  }

  onCopy = (type, msg) => {
    if (this.mounted) {
      this.setState(
        {
          [type]: msg,
        },
        () => {
          setTimeout(() => {
            this.setState({
              [type]: "",
            });
          }, 3000);
        }
      );
    }
  };

  render() {
    return (
      <div className="container react-copy-content">
        <h1 className="text-center">react-copy-content</h1>
        <p className="text-center">
          A Fully Customizable Click-To-Copy Component for React.
          <br />
          <a href="https://github.com/akshayymahajan/react-copy-content">
            Checkout the Documentation on Github
          </a>
        </p>

        <section className="text-center">
          <pre>{`
            <ClickToCopy
              contentToCopy="This is the default look and feel"
            />
          `}</pre>
          <ClickToCopy contentToCopy="This is the default look and feel" />
          <p>{this.state.defaultSuccess}</p>
        </section>

        <section className="text-center">
          <pre>{`
            <ClickToCopy
              contentToCopy="You can use custom JSX element for the button"
              render={props => (
                <a href="#copy" onClick={props.copy}>
                  Copy
                </a>
              )}
            />
          `}</pre>
          <ClickToCopy
            contentToCopy="You can use custom JSX element for the button"
            render={(props) => (
              <a href="#copy" onClick={props.copy}>
                Copy
              </a>
            )}
          />
        </section>

        <section className="text-center">
          <pre>{`
            <ClickToCopy
              contentToCopy="You can even set a custom action to be triggered on copy"
              render={props => (
                <a href="#copy" onClick={props.copy}>
                  Copy
                </a>
              )}
            />
          `}</pre>
          <ClickToCopy
            contentToCopy="You can even set a custom action to be triggered on copy"
            onCopy={() => this.onCopy("customSuccess", "Copied Successfully!")}
          />
          <p>{this.state.customSuccess}</p>
        </section>
      </div>
    );
  }
}
