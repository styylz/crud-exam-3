const serverURL = "http://localhost:3000";

class API {
  static fetchCars = (success, failure) => {
    fetch(`${serverURL}/Car`)
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  };

  static deleteCars = (id, success, failure) => {
    fetch(`${serverURL}/Car/${id}`, { method: "DELETE" })
      .then(success)
      .catch(failure);
  };
}

// const showError = (error) => console.error("Klaida:", error);

// console.log(`Initial data is being sent...`);

// API.fetchCars((data) => {
//   console.log("Initial data is received", data);
//   console.log(`Deleted Item with id \'1\'...'`);
//   API.deleteCars(
//     "100",
//     (data) => {
//       console.log("successfully deleted", data);
//       console.log("successfully updated", data);
//       API.fetchCars(
//         (data) => console.log("Received updated data", data),
//         showError
//       );
//     },
//     showError
//   );
// }, showError);
