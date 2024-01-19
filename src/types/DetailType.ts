import {PictureType} from "./PictureType";
import {PriceType} from "./PriceType";

export type DetailType = {
    description: string
    details: string
    id: string
    info: string
    like: boolean
    name: string
    picture: PictureType
    price: PriceType
}