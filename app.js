//INIT
const github = new GitHub();
const ui = new UI();
// Search Input
const searchUser = document.getElementById("searchUser");

// Search USer Event Listener

searchUser.addEventListener("keyup", e => {
  //e.preventDefault();
  //Get Input Text
  const userText = e.target.value;
  if (userText !== "") {
    // Make Http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //Show an Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear the Profile
    ui.clearProfile();
  }
});
