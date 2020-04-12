import * as readline from "readline";

class User {
  public name: string;
  public age: number;
  public job: string;
  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

let user: User = { name: "", age: 0, job: "" };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleUser = () => {
  console.log(user);
};

const askProfile = () => {
  rl.setPrompt("What's your name?\n>>");
  rl.prompt();
  rl.once("line", (name) => {
    user.name = name;
    rl.setPrompt("How old are you?\n>>");
    rl.prompt();
    rl.once("line", (age) => {
      user.age = Number(age);
      rl.setPrompt("What's your job?\n>>");
      rl.prompt();
      rl.once("line", (job) => {
        user.job = job;
        rl.write("Good Bye!\n");
        rl.close();
        handleUser();
      });
    });
  });
};

askProfile();
