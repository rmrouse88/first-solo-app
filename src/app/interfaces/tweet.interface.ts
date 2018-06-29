import { IGeo } from './geo.interface'
import { ICoordinates, IBoundingBox, IPlace } from './place.interface'

export interface ITweet{
    text: string;
    user_name: string;
    user_screen_name: string;
    hashtags: Array<string>;
    user_origin: Object;
    place: {
        [key: string]: IPlace
    };
    coords: {
        [key: string]: IGeo
    };
    timestamp: string;
    retweet: boolean;
    quoted: boolean;
    following_count: number;
    followers_count:number;
}