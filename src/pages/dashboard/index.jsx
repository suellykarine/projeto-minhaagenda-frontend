import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
        <span> MEUS CONTATOS</span>
        <section>
          <input
            type="text"
            name="name"
            placeholder="Digite  seu nome"
            {...register("name")}
          />
          <input
            name="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <input
            name="number"
            placeholder="Digite seu telefone"
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
      </TaskContact>
    </Container>
  );
};
export default Dashboard;
