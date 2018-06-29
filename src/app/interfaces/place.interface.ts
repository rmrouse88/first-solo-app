export interface ICoordinates{
    coordinates: Array<Array<Array<number>>>;
    type: string;
}

export interface IBoundingBox{
    bounding_box: ICoordinates;
}

export interface IPlace {
    id: string;
    url: string;
    place_type: string;
    name: string;
    full_name: string;
    country_code: string;
    country: string;
    bounding_box: IBoundingBox;
    attributes: null;
}
