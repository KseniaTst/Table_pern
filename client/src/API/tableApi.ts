import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7000/table/'
})

export const TableAPI = {
    getTable(){
        return instance.get('get')
    },
    sortTable(order:string, column:string) {
        return instance.get(`sort?order=${order}&column=${column}`)
    }
    // sortNameAsc (){
    //     return instance.get('sort/nameAsc')
    // },
    // sortNameDesc (){
    //     return instance.get('sort/nameDesc')
    // },
    // sortQuantityAsc (){
    //     return instance.get('sort/quantityAsc')
    // },
    // sortQuantityDesc (){
    //     return instance.get('sort/quantityDesc')
    // },
    // sortDistanceAsc (){
    //     return instance.get('sort/distanceAsc')
    // },
    // sortDistanceDesc (){
    //     return instance.get('sort/distanceDesc')
    // }

}

//types

export type RowType = {
    id: number,
    date: string,
    name: string,
    quantity: number,
    distance: number

}