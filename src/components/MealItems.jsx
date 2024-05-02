import { useState, useEffect } from 'react';

export default function MealItems({ onAdd }) {
  const [fetchedItems, setFetchedItems] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');
      const resData = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch places');
      }

      for (let i in resData) {
        resData[i].quantity = 1;
      }

      setFetchedItems(resData);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {fetchedItems.map((meal) => (
        <li key={meal.id} className="meal-item">
          <article>
            <img
              src={`http://localhost:3000/${meal.image}`}
              alt={meal.description}
            />
            <div>
              <h3>{meal.name}</h3>
              <div className="meal-item-price">${meal.price}</div>
              <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
              <button className="button" onClick={() => onAdd(meal)}>
                Add to Cart
              </button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
}
