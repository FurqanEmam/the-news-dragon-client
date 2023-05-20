import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg1.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle className="me-2" />
        Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub className="me-2" />
        Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook>FaceBook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
<h2>right nav</h2>;
