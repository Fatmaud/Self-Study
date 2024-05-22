import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import mealSvg from "../../assets/meal.svg";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

const Login = () => {
  //! 3--Context Consume: Contextten gelen verileri/stateleri aliyoruz:
  const { name, setName, password, setPassword } = useContext(RecipeContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //!context sayfasinda localstorage da username ve password ü alma kodunu hazirlamistik. burada bu fonksiyonla (submit eventiyle) gelen username ve password u localstorage a atiyoruz.
    localStorage.setItem("username", name);
    localStorage.setItem("password", password);

    //!login basarili olursa home a gidilecek
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
