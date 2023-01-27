import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dashboard from "../../assets/dashboard.png";
import Card from "../../components/card";
import api from "../../services/api";
import { Container, InputContanier, TaskContact } from "./style";

const Dashboard = () => {
  const [task, setTask] = useState([]);
  const { register, handleSubmit } = useForm();

  const loadtask = () => {
    api
      .get("/contact")
      .then((response) => setTask(response.data))
      .catch((err) => "Ops! algo deu errado");
  };

  useEffect(() => {
    loadtask();
  }, []);

  const onSubmitCadstrar = ({ name, email, telephone }) => {
    const contact = {
      name,
      email,
      telephone,
    };
    api.post("/contact/:id", contact).then((response) => loadtask());
  };

  const deleteTask = (id) => {
    const newtask = task.filter((item) => item.id !== id);
    api.delete("/contact").then((response) => setTask(newtask));
  };

  return (
    <Container>
      <InputContanier onSubmit={handleSubmit(onSubmitCadstrar)}>
        <h1>
          {" "}
          <img src={dashboard} alt="meus contatos" />{" "}
        </h1>
        <section>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            {...register("name")}
          />
          <input name="email" placeholder="Email" {...register("email")} />
          <input
            name="number"
            placeholder="Telefone/Celular"
            {...register("telephone")}
          />
        </section>
        <button type="submit">Cadastrar Contato</button>
      </InputContanier>

      <TaskContact>
        {task.map((task) => (
          <Card
            key={task.id}
            name={task.name}
            email={task.email}
            telephone={task.telephone}
            onClick={() => {
              deleteTask(task.id);
            }}
          />
        ))}
        {/* {[1, 2, 3].map((_) => (
          <Card
            name="Suelly Araujo"
            email="suelly@minhaagenda.com"
            telephone="+55 (81) 12345678"
            onClick={() => {}}
          />
        ))} */}
      </TaskContact>
    </Container>
  );
};
export default Dashboard;
