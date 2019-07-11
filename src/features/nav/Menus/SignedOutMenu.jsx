import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn, register }) => {
  return (
    <div>
      <Menu.Item position="right">
        <Button basic inverted content="Login" onClick={signIn} />
        <Button
          basic
          inverted
          content="Register"
          style={{ marginLeft: "0.5rem" }}
          onClick={register}
        />
      </Menu.Item>
    </div>
  );
};

export default SignedOutMenu;
