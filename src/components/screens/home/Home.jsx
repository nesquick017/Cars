// import styles from "./Home.module.css";
import Caritem from "./car-item/Caritem";
import cars from "./cars.data";
const Home = () => {
  return (
    <div>
      <h1>Cars catalog</h1>
      <div>
        {cars.length > 0 ? (
          cars.map((car) => <Caritem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
};
export default Home;
