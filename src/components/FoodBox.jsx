import { Card, Button, Col } from 'antd';

function FoodBox(props) {
  const { food } = props;

  const handleDeleteFood = (foodName) => {
    props.setActualFoods((allFoods) => {
      allFoods.filter((each, index) => {
        return index !== food.index;
      })
    })
  }
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img
          style={{ width: '100px', height: '60px', objectFit: 'contain' }}
          src={food.image}
          alt={food.name}
          width={0}
        />

        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={() => handleDeleteFood(food.index)} type="primary">Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
