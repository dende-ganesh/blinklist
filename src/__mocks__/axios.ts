import { books } from "../db.json"
const mockResponse = {
    data: {
        ...books
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}