import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import useSignIn from "../viewmodels/useSignin";





export default function Register(): JSX.Element {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
  } = useSignIn();

  function handleSignOut(e: any) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("userCredential ", userCredential);
        try {
          const docRef = await addDoc(collection(db, "user"), {
            first: "David",
            email: email,
          });
          console.log("Document written with ID: ", docRef.id);
          window.location.href = "/Home";
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      
      .catch((error) => {
        console.log(error);
        switch (error.message) {
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
        <span>Digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
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

        <button className="button" onClick={handleSignOut}>
          Cadastrar
        </button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}
