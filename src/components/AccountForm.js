import React from "react";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/UserProvider";

class AccountForm extends React.Component {
  state = { 
    username: this.props.username, 
    membershipLevel: this.props.membershipLevel, 
  };

  
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }
  
  render() {
    const { firstName, lastName, membershipLevel, email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="New Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
          />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Input
          label="User Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />



        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}


const ConnectedAccountForm = (props) => (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
          email={value.email}
        />
    )}
    </AccountConsumer>
  
)





const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];




export default ConnectedAccountForm;