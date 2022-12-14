import React from "react";
import { connect } from "react-redux";

class Navbar extends React.Component {
  renderAuth() {
    if (this.props.auth.isAuthenticated) {
      return <a href="/api/logout">Logout</a>;
    } else {
      return <a href="/api/auth/google">Login</a>;
    }
  }

  render() {
    return (
      <div
        style={{
          height: "60px",
          width: "100%",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {this.renderAuth()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Navbar);
