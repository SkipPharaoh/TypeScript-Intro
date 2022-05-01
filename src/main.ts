// Variables //
const a = "1";
console.log("aaa", a);

let hello: string = "world";

// Functions //
const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("Skip", "Lessons"));

// Objects //
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Skip",
  age: 30,
  getMessage() {
    return "Hello" + name;
  },
};

const user2: UserInterface = {
  name: "Jack",
  getMessage() {
    return "Hello" + name;
  },
};

console.log(user.name);
