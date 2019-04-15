import React from "react";
import MainHeader from "./MainHeader";

class ClientHomepage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Client Homepage</h1>
        <MainHeader welcome="Welcome Client!" />
      </div>
    );
  }
}
export default ClientHomepage;
