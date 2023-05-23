/* eslint-disable react/prop-types */
import styles from "../Home.module.css";

const Caritem = ({ car }) => {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("eu-EU", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <button className={styles.button}>Read more</button>
      </div>
    </div>
  );
};
export default Caritem;
