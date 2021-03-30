import axios from "axios";
const API_URL = "https://randomuser.me/api/";

const API = {
  getUsers: function(userQuantity) {
     return (
       axios
        .get(`${API_URL}?results=${userQuantity}`)
        .then(res => console.log(res.data.results))
        
        .catch((err) => console.log(err))
     );
  }
};

export default API;
