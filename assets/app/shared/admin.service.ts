export class AdminService {
  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    console.log(promise);
    return promise;
  }
}