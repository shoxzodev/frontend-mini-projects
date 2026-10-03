import { element } from "../types/elements.types";

const cars:element[] = [
    {
        id:1,
        model:"bmw",
    },
    {
        id:2,
        model:"ford",
    }
];

const animals:element[] = [
    {
        id:1,
        model:"cat",
    },
    {
        id:2,
        model:"dog",
    }
];

const fruits:element[] = [
    {
        id:1,
        model:"apple",
    },
    {
        id:2,
        model:"banana",
    }
];

const colors:element[] = [
    {
        id:1,
        model:"green",
    },
    {
        id:2,
        model:"yellow",
    }
];

export const elements = {
    cars,
    animals,
    fruits,
    colors,
    all():{id:number , model:string}[] {
        const allElements = [...this.cars , ...this.animals, ...this.fruits, ...this.colors];

        const newEl = allElements.reduce(
            (acc:any , item , index) => {
                acc.push({id:index , model:item.model})

                return acc
            } , [])

        return newEl
    }
}