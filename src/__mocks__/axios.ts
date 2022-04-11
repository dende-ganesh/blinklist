
const mockResponse = {
    data: [ 
        {
          "id": 8,
          "title": "Eat Better, Feel Better",
          "author": "Giada De Laurentiis",
          "time": "13-minute read",
          "image": "8",
          "reads": "1.9k reads"
        },
        {
          "id": 7,
          "title": "The Lonely Century",
          "author": "Noreena Hertz",
          "time": "15-minute read",
          "image": "7"
        },
        {
          "id": 2,
          "title": "Employee to Entrepreneur",
          "author": "Steve Glaveski",
          "time": "15-minute read",
          "image": "11"
        }
      ]
    

};
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}