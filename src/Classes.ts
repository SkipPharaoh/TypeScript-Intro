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