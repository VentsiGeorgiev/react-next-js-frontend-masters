import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

function PizzaOfTheDay() {
  const pizzaOfTheDay = usePizzaOfTheDay();
  if (!pizzaOfTheDay) return <div>Loading...</div>;
  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the day</h2>
      <div className="pizza-of-the-day-info">
        <div>
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">From {pizzaOfTheDay.sizes.S}</p>
        </div>
        <img
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
          className="pizza-of-the-day-image"
        />
      </div>
    </div>
  );
}
export default PizzaOfTheDay;
