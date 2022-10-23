import React, { useContext } from "react";
import DisplayContext from "../../context/display-context";
import StoreContext from "../../context/store-context";
import { useRouter } from "next/router";
import styles from "../../../styles/cart.module.css";
import { quantity, sum, formatPrice } from "../../utils/helper-functions";
import CheckoutCard from "./CheckoutCard";

const CartView = () => {
	const { cartView, updateCartViewDisplay, updateCheckoutStep } =
		useContext(DisplayContext);
	const { cart, currencyCode } =
		useContext(StoreContext);
	const router = useRouter();

	return (
		<div className={`${styles.cart_overlay} ${cartView ? styles.overlay_active : styles.overlay_hide}`}>
			<div className={`${styles.container} ${cartView ? styles.active : null}`}>
				<div className={styles.top}>
					<p>CART</p>
					<p>
						{cart.items.length > 0 ? cart.items.map(quantity).reduce(sum) : 0}{" "}
						{cart.items.length > 0 && cart.items.map(quantity).reduce(sum) === 1
							? "item"
							: "items"}
					</p>
					<button
						className={styles.closebtn}
						onClick={() => updateCartViewDisplay()}
					>
						x
					</button>
				</div>
				<div className={styles.overview}>
					{cart.items
						.sort((a, b) => {
							const createdAtA = new Date(a.created_at),
								createdAtB = new Date(b.created_at);

							if (createdAtA < createdAtB) return -1;
							if (createdAtA > createdAtB) return 1;
							return 0;
						})
						.map((i) => {
							return (
								<CheckoutCard product={i} />
							);
						})}
				</div>
				<div className={styles.subtotal}>
					<p>Subtotal (incl. taxes)</p>
					<span>
						{cart.region ? formatPrice(cart.subtotal, currencyCode) : 0}
					</span>
				</div>
				<div className={styles.bottom}>
					<button
						className={styles.checkoutbtn}
						onClick={() => {
							updateCheckoutStep(1);
							updateCartViewDisplay();
							router.push("/checkout");
						}}
						disabled={cart.items.length < 1 ? true : false}
					>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartView;
