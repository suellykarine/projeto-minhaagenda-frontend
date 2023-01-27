import { BsFillTelephoneFill, BsTrash } from "react-icons/bs";

import { Container } from "./style";

const Card = ({ name, email, telephone, onClick }) => {
  return (
    <Container>
      <BsFillTelephoneFill />
      <span>
        <hr />
        {name}
      </span>
      <hr />
      <span> {email}</span>
      <hr />
      <span> {telephone}</span>
      <i>
        <BsTrash size={25} onClick={onClick}>
          Apagar
        </BsTrash>
      </i>
    </Container>
  );
};

export default Card;
