import { Dayjs } from 'dayjs';
export interface SliderItem {
    key: number;
    url: string;
    name: string;
}
export interface Feedback{
    key:number,
    name:string,
    cmt:string
}
export interface RoomDetails {
    key: string;
    url: string;
    name: string;
    bio: string;
}
export interface outServices {
    key: string;
    name: string;
    url: string;
    bio: string | JSX.Element;
} 
export interface CalendarProps {
    onSelect: (date: Dayjs) => void;
    disabledDate?: (current: Dayjs) => boolean; // Optional disabledDate prop
  }