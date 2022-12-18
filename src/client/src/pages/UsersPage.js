import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

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

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:type" content="article" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <ul>{this.renderUsers()}</ul>
      </div>
    );
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
