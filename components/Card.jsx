import { useContext } from 'react';
import styles from '../styles/card.module.css'
import Image from "next/image";
import Link from "next/link";
import { formatPrices } from "../utils/prices";
import StoreContext from "../context/store-context";

const Card = ({ product }) => {

    const { cart } = useContext(StoreContext);

    return (
        <div className={styles.card}>
            <Link
                href={{
                    pathname: `/product/[id]`,
                    query: { id: product.id },
                }}
                passHref
            >
                <a>
                    <div className={styles.imgHolder}>
                        <Image
                            src={product.thumbnail}
                            alt="thumbnail"
                            layout='fill'
                        />
                    </div>
                    <h2>{product.title}</h2>
                    <p className={styles.card_price}>
                        {formatPrices(cart, product.variants[0])}
                    </p>
                </a>
            </Link>
        </div>
    )
}

export default Card