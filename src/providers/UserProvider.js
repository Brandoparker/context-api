import React from "react";

// Set Up The Initial Context
const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = {
    firstName: "Bob",
    lastName: 'Jones',
    dateJoined: "12/18/18",
    membershipLevel: "Silver",
    email: "cats@kitty.com",
    updateAccount: (account) => this.updateAccount(account), 
  };
    
  updateAccount = (account) => {
    this.setState({ ...account, });
  }


  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default UserProvider;