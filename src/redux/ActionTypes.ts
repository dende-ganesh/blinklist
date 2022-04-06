type FetchBlinks={
    type:"FETCH_BLINKS",
}
export type Blinks={
    id:number,
    title:string,
    author:string,
    time:string,
    image:string,
    reads?:string,

}[]
type FetchSuccess={
    type:"FETCH_SUCCESS",
    payload:Blinks,
}
type FetchFailure={
    type:"FETCH_FAILURE",
    payload:string,
}
export type Action=FetchBlinks|FetchFailure|FetchSuccess