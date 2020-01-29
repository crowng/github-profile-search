class GitHub {
  constructor() {
    this.client_id = "569d5327f7397d1e09f7";
    this.client_secret = "002858282a83f83bbff3809908165d6d938a2333";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repos = await repoResponse.json();
    const profile = await profileResponse.json();
    return {
      profile,
      repos
    };
  }
}
