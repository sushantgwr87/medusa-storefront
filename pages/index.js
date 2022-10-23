import Image from "next/image";
import styles from "../styles/landing-page.module.css";
import storeStyles from '../styles/store.module.css'
import homeImage from "../public/image2.png";
import { createClient } from "../utils/client";
import Card from "../components/Card";

export default function Home({ products }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.home_intro}>
                    <div className={styles.intro}>
                        <h3>Welcome!</h3>
                        <p>
                            This is Demo store made using <span>Medusa</span>{" "}
                            and <span>Next.js</span> for <span>Hackathon</span>{" "}
                            by Medusa itself.
                        </p>
                    </div>
                    <div className={styles.intro_image}>
                        <Image src={homeImage} layout="fill" alt="home" />
                    </div>
                </section>
                <section id="storeSection" className={storeStyles.container}>
                    <h1>Store</h1>
                    <div className={storeStyles.products}>
                        <div className={storeStyles.grid}>
                            {products &&
                                products.map((p) => {
                                    return <Card product={p} />;
                                })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export const getStaticProps = async () => {
    const client = createClient();
    const { products } = await client.products.list();

    return {
        props: {
            products,
        },
    };
};
