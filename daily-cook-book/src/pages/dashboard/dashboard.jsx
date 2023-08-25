import React from "react";
import styles from './dashboard.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top_bar}>
                <input type="text" placeholder="Searchy by name, cuisine, ingredients..." />
                <button>Add recipe</button>
            </div>
            <div className={styles.body}>
                <div className={styles.card}>
                    <div className={styles.card_left}>
                        <img src="/spiceyItalianPasta.jpg" alt="italianspicey pasta" />
                    </div>
                    <div className={styles.card_right}>
                        <div className={styles.card_right_top}>
                            <div className={styles.name}>name</div>
                            <div className={styles.cuisine}>cuisine</div>
                            <div>ingredients are etc hello world world world world world</div>
                        </div>
                        <div className={styles.card_right_bottom}>
                            <button>like</button>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;