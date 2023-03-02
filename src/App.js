import { Button, Collapse, Row, Divider } from 'antd';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

function App() {
  const [actualFoods, setActualFoods] = useState(foods);
  const [search, setSearch] = useState('');
  const [isFormShowing, setIsFormShowing] = useState(false);


  return (
    <div className="App">
      <Collapse in={isFormShowing}>
        <AddFoodForm setActualFoods={setActualFoods} />
      </Collapse>
      <Button
        variant="outline-warning"
        onClick={() => setIsFormShowing(!isFormShowing)}
      >
        Ver Formulario
      </Button>
      <h1 style={{ color: 'white' }}>Iron Nutricion</h1>

      <Search setSearch={setSearch} search={search} />

      <Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {actualFoods
            .filter((each) => {
              return each.name.includes(search);
            })
            .map((food, index) => {
              return (
                <FoodBox
                  key={food.name}
                  setActualFoods={setActualFoods}
                  food={{
                    name: food.name,
                    calories: food.calories,
                    image: food.image,
                    servings: food.servings,
                    index
                  }}
                />
              );
            })}
        </Row>
      </Divider>
    </div>
  );
}

export default App;
