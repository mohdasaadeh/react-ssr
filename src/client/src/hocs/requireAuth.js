import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const requireAuth = (Children) => {
  class RenderChildren extends React.Component {
    renderChildren() {
      switch (this.props.auth.isAuthenticated) {
        case false:
          return (
            <div
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Loading...
            </div>
          );
        case "":
          return <Redirect to={"/"} />;
        default:
          return <Children {...this.props} />;
      }
    }

    render() {
      return this.renderChildren();
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(RenderChildren);
};

export default requireAuth;
