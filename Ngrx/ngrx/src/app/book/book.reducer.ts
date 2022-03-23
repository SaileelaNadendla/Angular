
import { createReducer, on } from "@ngrx/store";
import { Book } from "./book";
import { retrivedBookList } from "./book.action";

export const intialState: ReadonlyArray<Book> = [];
export const bookReducer = createReducer(
    intialState,
    on(retrivedBookList, (  state, {book})=>book)
);

