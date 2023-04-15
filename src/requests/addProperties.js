import axios from "axios";

const addProperties = () => {
  axios
    .post("http://localhost:4000/api/v1/PropertyListing", { fields })
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default addProperties;
