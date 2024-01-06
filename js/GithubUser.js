export class GithubUser {
  static async search(username) {
    const endpoint = `https://api.github.com/users/${username}`;

    try {
      const response = await fetch(endpoint);
      const { login, name, public_repos, followers } = await response.json();

      return { login, name, public_repos, followers }
    } catch (error) {
      throw new Error('Erro ao obter informações do usuário do GitHub');
    }
  }
}
