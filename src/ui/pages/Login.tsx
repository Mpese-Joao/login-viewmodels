import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/config";
import useSignIn from "../viewmodels/useSignin";


export default function Login(): any {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
  } = useSignIn();

  function handleSignIn(e: any) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("userCredential ", userCredential);
        window.location.href = "/Home";
      })
      .catch((error) => {
        console.log(error);
        switch (error.message) {
          case "Firebase: Error (auth/user-not-found).":
            setErrorMessage("Usuário inexistente");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
            break;
          case "Firebase: Error (auth/wrong-password).":
            setErrorMessage("Senha incorrecta");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
            break;
          case "Firebase: Error (auth/missing-email).":
            setErrorMessage("Por favor insira o email");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
            break;
          case "Firebase: Error (auth/internal-error).":
            setErrorMessage("Insira a senha");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
            break;
          default:
            setErrorMessage("Dados inválidos");
            setTimeout(() => {
              setErrorMessage("");
            }, 2000);
            break;
        }
      });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="#">Esqueceu sua senha ?</a>

        <button className="button" onClick={handleSignIn}>
          Entrar
        </button>

        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/Register">Crie a sua conta aqui</Link>
        </div>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
