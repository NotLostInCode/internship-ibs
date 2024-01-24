import {PictureType} from "./PictureType";
import {PriceType} from "./PriceType";

export type ProductType = {
    description: string
    id: string
    like: boolean
    name: string
    picture: PictureType
    price: PriceType
}