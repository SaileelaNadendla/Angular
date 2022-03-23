import { createAction, props } from "@ngrx/store";
import {Book} from '../book/book'

export const addBook =createAction(
    '[Book list] Add Book',
    props<{bookId:string}>()
);

export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{bookId : string}>()
);

export const retrivedBookList = createAction(
    '[Book List/Api] Retrive Book Success',
    props<{book : ReadonlyArray<Book> }>()
);