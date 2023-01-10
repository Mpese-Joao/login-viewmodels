import UserRepositoryImpl from "../../repository/UserRepositoryImpl";

export default function useLoginViewModel() {
  const UserRepository = UserRepositoryImpl();

  function loginUser(email: string, password: string) {
    return new Promise((userCredential, reject) => {
      if (email === "" || password === " ") {
        ("usuario inexistente");
      } else {
        UserRepository.signIn(email, password)
        .then(userCredential)
        .catch(reject)

        
      }
    });
  }

  return {
    loginUser,
  };
}
