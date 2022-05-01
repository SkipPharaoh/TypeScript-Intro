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

// Type Aliases & Unions  //

type ID = string
type Name = string
type Surname = string
type PopularTag = string
type MaybePopularTag = PopularTag | null

interface UsersInterface {
    id: ID
    name: Name;
    surname: Surname;
}

const popularTags: PopularTag[] = ['dragon', 'tea']

const dragonsTag: MaybePopularTag = 'dragon'

let usename: string = "alex"
let pageName: string | number = '1'
let errorMessage: string | null = null;

let thisUser: UsersInterface | null = null;

let someProp: string | number | null | undefined | string[] | object 