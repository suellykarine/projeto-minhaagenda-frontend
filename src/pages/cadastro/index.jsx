import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../../services/api";

const Cadastro = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),

    email: yup.string().required("Email obrigatório").email("Email inválido"),
    telephone: yup.number().required("telefone obrigátorio").min(9),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitCadstrar = ({ name, email, telephone }) => {
    const user = {
      name,
      email,
      telephone,
    };
    api
      .post("/client", user)
      .then((_) => {
        toast.success("Conta criada com sucesso ");
        return history.push("/home");
      })
      .catch((err) => toast.error("Ops! algo deu errado"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitCadstrar)}>
        <input
          type="text"
          name="name"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span className="erro">{errors.name?.message}</span>
        <input
          name="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span className="erro">{errors.email?.message}</span>
        <input
          name="number"
          placeholder="Digite aqui seu telefone"
          {...register("telephone")}
        />
        <span className="erro">{errors.telephone?.message}</span>
        <button type="submit">cadastrar cliente</button>
      </form>
    </div>
  );
};
export default Cadastro;
