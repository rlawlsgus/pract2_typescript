import * as readline from "readline";

class User {
  public id: string;
  public name: string;
  public age: number;
  public job: string;

  constructor(id: string, name: string, age: number, job: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const createId = (name: string, age: number): string => {
  const date = Math.round(new Date().getTime() / 1000);
  const calcIdNum = date + age;
  const id = name + calcIdNum;
  return id;
};

let user: User = { id: "", name: "", age: 0, job: "" };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleUser = () => {
  const id = createId(user.name, user.age);
  console.log(id);
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
