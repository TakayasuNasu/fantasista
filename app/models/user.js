import Auth  from "../services/auth";

export default class User {
  constructor(name = "login") {
    this.name = name;
    this.email;
    this.password;
  }

}
