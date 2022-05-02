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