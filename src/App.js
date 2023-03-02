import { Button, Collapse, Layout, Row } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

function App() {
  const [actualFoods, setFoods] = useState(foods);
  const [foodAfterFiltered, setfilterFoods] = useState(foods);
  const [isFormShowing, setIsFormShowing] = useState(false);

  const addNewExpense = (newFood) => {
    setFoods([...actualFoods, newFood]);
    setfilterFoods([...foodAfterFiltered, newFood]);
  };

  const filterFoods = (searchInput) => {
    const filteredFoods = actualFoods.filter((each) => {
      let nameMin = each.name.toLowerCase();
      let searchMin = searchInput.toLowerCase();

      if (nameMin.includes(searchMin)) {
        return true;
      } else {
        return false;
      }
    });

    setfilterFoods(filteredFoods);
  };

  return (
    <Layout className="App">
      <Header>
        <Button
          variant="outline-warning"
          onClick={() => setIsFormShowing(!isFormShowing)}
        >
          Ver Formulario
        </Button>
        <h1 style={{ color: 'white' }}>Iron Nutricion</h1>
      </Header>
      <Content>
        <Search filterFoods={filterFoods} />
        <Collapse in={isFormShowing}>
          <AddFoodForm addNewExpense={addNewExpense} />
        </Collapse>

        <Row xs={1} md={2} className="g-4">
          {actualFoods.map((food) => {
            return (
              <FoodBox
                key={food.name}
                food={{
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings,
                }}
              />
            );
          })}
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
