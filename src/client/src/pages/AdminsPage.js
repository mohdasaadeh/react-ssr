import React from "react";
import { connect } from "react-redux";

import requireAuth from "../hocs/requireAuth";
import { fetchAdmins } from "../redux/actions";

class AdminsPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return <ul>{this.renderAdmins()}</ul>;
  }
}

export const loadData = (store) => {
  return store.dispatch(fetchAdmins());
};

const mapStateToProps = (state) => {
  return { admins: state.admins.data };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsPage)),
  loadData,
};
