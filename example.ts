
//ex 1
function Concatenations(a : string, b:string) :string {
    return a.concat(b)
}

console.log(Concatenations('Hello, ', 'World!'))

//ex 2
interface IHomeTasks {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData: {
        howIDoIt : string ,
         simeArray: (string | number)[]
        }[]
}

const MyHometask: IHomeTasks  = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//ex 3

interface MyArray<T> {

    [N: number]: T;

    reduce(callback: (acc: T, cur: T) => T): T;    
       
}

const initialValue = 0;
const array : MyArray<number> = [1,2,3]
console.log(array.reduce((acc, cur) => acc + cur));

//ex4 

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string
    }
}

type MyPartial<T> = {
    [P in keyof T]?: MyPartial<T[P]>;
};


const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        basis: 5
    }
}
