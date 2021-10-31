export const increment = (nbr)=>{
    return{
        type: 'INCREMENT',
        payload: nbr
    }
}

export const decrement = (nr)=>{
    return{
        type: 'DECREMENT',
        payload: nr
    }
}