import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "71544f1c2a2ee7119c4899009c6843b3",
  },
});
