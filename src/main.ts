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

// Any / Void / Never / Unknown //
// void
const doSomething = (): void => {
    console.log('doSomething')
}

let example1: void = null || undefined

// any
let example2: any = 'Any type of datatype' // avoid this data type at all cost

// never
let example3: never // usually used in libraries and/or functions. a function returning 'never' cannot have a reachable end point.

const doNothing = (): never => {
    throw 'never'
}

// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
console.log(vAny.foo());

// type assertion -> converting one type to another type
let s2: string = vUnknown as string
let pageNumber : string = '1';
let numericPageNumber: number = (pageNumber as unknown) as number;

// Working with DOM //
const someElement = document.querySelector('.foo') // as HTMLInputElement

    // console.log('someElement', someElement.value)

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value)
})

// Classes (OOP) //

interface PersonInterface {
    getFullName(): string;
}
class People implements PersonInterface {
    public firstName: string
    // private firstName: string
    // protected firstName: string
    lastName: string
    readonly unchangableName: string
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName
    }

    changeUnchangableName(): void {
        // this.unchangableName = 'foo';
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

class Admin extends People {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const person = new People('Skip', 'Pharaoh')
console.log(person.firstName)
console.log(People.maxAge)

const admin = new Admin('Foo', 'Bar')
console.log(admin.getEditor)