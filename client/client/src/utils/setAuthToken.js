import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Crea un token por cada petición
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Eliminar header para ahorrar caché
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;