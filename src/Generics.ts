// Generics //
const addId = <T extends object>(obj: T) => {
    const id: string = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface Some1Interface<T> {
    name: string
    data: T;
}

const some1: Some1Interface<{ meta: string }> = {
    name: 'Jack',
    data: {
        meta: 'foo',
    },
}

// const result = addId<Some1Interface>(some1)
// const result = addId<string>('foo')
// console.log('result', result)