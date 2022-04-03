import axios from "axios";


const api = axios.create({
  baseURL: "https://localhost:3000",
});

let signUp = async () => {
  const response = await api.post("/users", {
});
};

let userMap = {
  "user": {
      "email": "",
      "password": "",
      "password_confirmation": ""
  }
}
export default api;