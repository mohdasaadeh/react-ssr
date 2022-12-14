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

export const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

const mapStateToProps = (state) => {
  return { users: state.users.data };
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersPage),
  loadData,
};
