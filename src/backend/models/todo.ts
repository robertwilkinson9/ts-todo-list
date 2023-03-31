// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Todo {
    constructor(public due: string, public summary: string, public text: string, public id?: ObjectId) {}
}
