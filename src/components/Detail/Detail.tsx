import styles from './Detail.module.css'
import {FC} from "react";
import {BASE_URL} from "../../api/constansts";
import increment from '../../assets/icons/increment.svg'
import decrement from '../../assets/icons/decrement.svg'
import like from '../../assets/icons/like.svg'
import {DetailType} from "../../types";


type PropsType = {
    item: DetailType
}

export const Detail: FC<PropsType> = ({item}) => {
    return (
        <>
             <div className={styles.detailedProduct}>
                    <div className={styles.detailedImg}>
                        <img src={`${BASE_URL}${item.picture.path}`} alt={item.picture.alt}/>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.detailDescription}>
                            <h1 className={styles.detailTitle}>{item.name}</h1>
                            <p className={styles.detailText}>${item.info}</p>

                            <h2 className={styles.detailSub}>Details</h2>
                            <p className={styles.detailText}>{item.details}</p>
                        </div>

                        <div className={styles.detailAdd}>
                            <div className={styles.detailPrice}>${item.price.value}</div>
                            <div className={styles.detailControls}>
                                <div className={styles.detailNumberGoods}>
                                    <button className={styles.detailDecrement}>
                                        <img src={decrement} alt="decrement"/>
                                    </button>
                                    <div className={styles.detailNumber}>1</div>
                                    <button className={styles.detailIncrement}>
                                        <img src={increment} alt="increment"/>
                                    </button>
                                </div>
                                <button className={styles.detailAddCart}>Add to cart</button>
                                <button className={styles.detailLike}>
                                    <img src={like} alt="like"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}



