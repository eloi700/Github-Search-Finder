class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //Display Profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3" d-grid>
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="image" class="img-fluid mb-2" />
            <div class="d-grid">
            <a
              href="${user.html_url}"
              target="_blank"
              class="btn btn-primary btn-sm mb-2"
              >View Profile</a
            >
            </div>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary"
              >Public Repos: ${user.public_repos}</span
            >
            <span class="badge bg-dark">Public Gists: ${user.gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Webskgrounite/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>`;
  }
  //Show User Repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
        <div class="row">
          <div class="col col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col col-md-6">
            <span class="badge bg-dark">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-success">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-info">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
        `;
    });

    //Output the Repos
    document.getElementById("repos").innerHTML = output;
  }

  //show alert message()
  showAlert(message, className) {
    //clear any remaining alerts
    this.clearAlert();
    //create div, add class, add text, get parent, get search box, insert alert
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    //timeout after 3sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear Alert Message()
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //clear profile()
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
