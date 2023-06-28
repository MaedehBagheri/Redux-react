import { BUY_BOOK } from "./BookTypes";

export function buyBook(numbers=1){
    return {
        type:BUY_BOOK,
        payload:numbers,
    }
}