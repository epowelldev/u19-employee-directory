import axios from "axios";
const API_URL = "https://randomuser.me/api/?results=";

const API = {
  getUsers: function(userQuantity) {
    return axios.get(`${API_URL}?results=${userQuantity}`);
  }
};

export default API;
