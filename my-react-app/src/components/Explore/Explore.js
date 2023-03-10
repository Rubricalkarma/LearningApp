import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { test } from "../Service/UserService";

export default function Explore() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> This is the the Explore Page</h1>
      <Button onClick={() => navigate("/create")}>Create Deck</Button>

      <Button onClick={async () => await test()}>TEST</Button>
    </div>
  );
}
