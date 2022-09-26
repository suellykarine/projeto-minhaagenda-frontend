import { BsFillTelephoneFill } from "react-icons/bs";
import { Container } from "./style";

const Card = ({ name, email, telephone, onClick }) => {
  return (
    <Container>
      <span>
        <BsFillTelephoneFill />
        <hr />
        {name}
      </span>
      <hr />
      <span> {email}</span>
      <hr />
      <span> {telephone}</span>
      <button onClick={onClick}>Apagar Contato</button>
    </Container>
  );
};

export default Card;
