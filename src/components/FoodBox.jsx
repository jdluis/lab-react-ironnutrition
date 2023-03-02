import { Card } from "antd";

function FoodBox(props) {
  const { food } = props;
  return (
    <Card key={food.name}>
      <img
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
        src={food.image}
        alt={food.name}
        width={0}
      />

      <h3> {food.name} </h3>

      <button>Delete</button>
    </Card>
  );
}

export default FoodBox;
