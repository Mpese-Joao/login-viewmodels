import { Link } from "react-router-dom";
import useLoginUiState from "../states/HomeUiState";
import useLoginViewModel from "../viewmodels/LoginViewModel";


export default function Login(): JSX.Element {

  const {login, setLogin} = useLoginUiState();
  const { loginUser } = useLoginViewModel();

function loginUserAccount(e : any) {
  loginUser(login.email, login.password)
  e.preventDefault()
      // .then(onSuccessLogin)
       // .catch(onErrorLogin)
    }

  

  







  

  return (
    <div className="container">
      <header className="header">
        <span>Digite suas informações de login</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            value={login?.email}
           // onChange={(e) => setEmail(e.target.value)}
           
          // onChange={(e) => setEmail(e.target.value)}
              
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            value={login?.password}
            //onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#">Esqueceu sua senha ?</a>

        <button className="button" onClick={loginUserAccount}>
          Entrar
        </button>

        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/Register">Crie a sua conta aqui</Link>
        </div>
      </form>
      
      
    </div>
  );
}
