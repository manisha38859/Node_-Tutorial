// MODULES
//Every file is module (by default)

const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi= (name) => {
    console.log(`hello there ${name}`)
}

sayHi('Susan')
sayHi(john)
sayHi(peter)
