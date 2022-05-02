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