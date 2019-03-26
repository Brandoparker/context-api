import React from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/UserProvider";

const Account = () => (
  <AccountConsumer>
    { value => (
      <Card>
        <Card.Content>
          { value.firstName } { value.lastName }
          
          <Card.Meta>
            <p>Date Joined: { value.dateJoined }</p>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Membership Level: { value.membershipLevel }</p>
        </Card.Content>
        <Card.Content>
          <p>Email: { value.email }</p>
        </Card.Content>
      </Card>
    )}
  </AccountConsumer>
)

export default Account;
