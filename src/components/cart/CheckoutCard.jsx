import React, { useContext } from "react";
import styles from '../../../styles/cart.module.css'
import { formatPrices } from "../../utils/prices";
import CounterButton from "./CounterButton";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import Link from "next/link";
import Image from "next/image";

const CheckoutCard = ({product}) => {

    const { updateCartViewDisplay } =
        useContext(DisplayContext);
    const { cart, updateLineItem, removeLineItem } =
        useContext(StoreContext);

    return (
        <div key={product.id} className={styles.product}>
            <figure onClick={() => updateCartViewDisplay()}>
                <Link
                    href={{
                        pathname: `/product/[id]`,
                        query: { id: product.variant.product.id },
                    }}
                    passHref
                >
                    <a>
                        <div className={styles.placeholder}>
                            <Image
                                objectFit="cover"
                                height="100%"
                                width="100%"
                                src={product.variant.product.thumbnail}
                                alt={`${product.title}`}
                            />
                        </div>
                    </a>
                </Link>
            </figure>
            <div className={styles.controls}>
                <div>
                    <div className={styles.product_content}>
                        <Link
                            href={{
                                pathname: `/product/[id]`,
                                query: { id: product.variant.product.id },
                            }}
                            passHref
                        >
                            <a>{product.title}</a>
                        </Link>
                        <p className={styles.size}>Size: {product.variant.title}</p>
                        <p className={styles.size}>
                            Price:{" "}
                            {formatPrices(cart, product.variant)}
                        </p>
                    </div>
                    <div>
                        <div className={styles.mid}>
                            <div className={styles.selector}>
                                <CounterButton
                                    handleIncrement={() =>
                                        updateLineItem({
                                            lineId: product.id,
                                            quantity: product.quantity + 1,
                                        })}
                                    handleDecrement={() => updateLineItem({
                                        lineId: product.id,
                                        quantity: product.quantity - 1,
                                    })}
                                    quantity={product.quantity}
                                />
                            </div>
                        </div>
                        <p>{ }</p>
                    </div>
                </div>
                <button className={styles.remove} onClick={() => removeLineItem(product.id)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CheckoutCard