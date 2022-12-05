import React from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../redux/actions";

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return <ul>{this.renderUsers()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersPage);