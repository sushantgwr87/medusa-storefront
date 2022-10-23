import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { BsChevronLeft } from "react-icons/bs";
import StoreContext from "../../context/store-context";
import { resetOptions } from "../../utils/helper-functions";
import styles from "../../styles/product.module.css";
import { createClient } from "../../utils/client";
import { formatPrices } from "../../utils/prices";
import CounterButton from "../../components/cart/CounterButton";

const Product = ({ product }) => {
    const { addVariantToCart, cart } = useContext(StoreContext);
    const [options, setOptions] = useState({
        variantId: "",
        quantity: 0,
        size: "",
    });

    useEffect(() => {
        if (product) {
            setOptions(resetOptions(product));
        }
    }, [product]);

    const handleQtyChange = (action) => {
        if (action === "inc") {
            if (
                options.quantity <
                product.variants.find(({ id }) => id === options.variantId)
                    .inventory_quantity
            )
                setOptions({
                    variantId: options.variantId,
                    quantity: options.quantity + 1,
                    size: options.size,
                });
        }
        if (action === "dec") {
            if (options.quantity > 1)
                setOptions({
                    variantId: options.variantId,
                    quantity: options.quantity - 1,
                    size: options.size,
                });
        }
    };

    const handleAddToBag = () => {
        addVariantToCart({
            variantId: options.variantId,
            quantity: options.quantity,
        });
        if (product) setOptions(resetOptions(product));
    };

    return (
        <div className={styles.container}>
            <div className={styles.product_image}>
                <Image
                    layout="fill"
                    src={product.thumbnail}
                    alt={`${product.title}`}
                />
            </div>
            <div className={styles.info}>
                <Link href="/" className={styles.back_btn}>
                    <BsChevronLeft />
                </Link>
                <div className={styles.details}>
                    <h1>{product.title}</h1>
                    <p className="price">
                        {formatPrices(cart, product.variants[0])}
                    </p>
                    <div className={styles.selection_wrap}>
                        <p>Select Size</p>
                        <div className={styles.selection}>
                            {product.variants
                                .slice(0)
                                .reverse()
                                .map((v) => {
                                    return (
                                        <button
                                            key={v.id}
                                            className={`${styles.sizebtn} ${
                                                v.title === options.size
                                                    ? styles.selected
                                                    : null
                                            }`}
                                            onClick={() =>
                                                setOptions({
                                                    variantId: v.id,
                                                    quantity: options.quantity,
                                                    size: v.title,
                                                })
                                            }
                                        >
                                            {v.title}
                                        </button>
                                    );
                                })}
                        </div>
                    </div>
                    <div className={styles.selection}>
                        <p>Select Quantity</p>
                        <div className={styles.qty}>
                            <CounterButton
                                handleIncrement={() => handleQtyChange("inc")}
                                handleDecrement={() => handleQtyChange("dec")}
                                quantity={options.quantity}
                            />
                        </div>
                    </div>
                    <button
                        className={styles.addbtn}
                        onClick={() => handleAddToBag()}
                    >
                        <span>Add to cart</span>
                        <IoMdCart />
                    </button>
                    <div className={styles.tabs}>
                        <div className="tab-titles">
                            <button className={styles.tabtitle}>
                                Product Description
                            </button>
                        </div>
                        <div className="tab-content">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//create a Medusa client
const client = createClient();

export async function getStaticPaths() {
    // Call an external API endpoint to get products
    const { products } = await client.products.list();

    // Get the paths we want to pre-render based on the products
    const paths = products.map((product) => ({
        params: { id: product.id },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the product `id`.
    // If the route is like /product/prod_1, then params.id is 1
    const { product } = await client.products.retrieve(params.id);

    // Pass post data to the page via props
    return { props: { product } };
}

export default Product;
