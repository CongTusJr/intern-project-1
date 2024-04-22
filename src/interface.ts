
export interface SliderItem {
    key: number;
    url: string;
    name: string;
}
export interface Feedback{
    id:number,
    name:string,
    cmt:string
}
export interface RoomDetails {
    id: number;
    image: string;
    name: string;
    bio: string;
    url:string;
    services?:any;
    amenities?:any;
    maxPeople?:number,
    price?:number
}
export interface outServices {
    id: number;
    name: string;
    image: string;
    bio: any;
} 
