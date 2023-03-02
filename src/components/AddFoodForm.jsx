import { Button, Divider } from 'antd';

import Input from 'antd/es/input/Input';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [serving, setServing] = useState(0);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleServingInput = (e) => {
    setServing(e.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      serving,
    };

    props.setActualFoods((allFooods => {
      return [...allFooods, newFood];
    }));

    // limpiamos los campos desdes de crear el expense
    setName('');
    setImage('');
    setCalories(0);
    setServing(0);
  };

  return (
    <form
      style={{ maxWidth: '600px', justifyContent: 'center', margin: 'auto' }}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={serving} type="number" onChange={handleServingInput} />

      <Button
        style={{ width: '100%' }}
        onClick={handleSubmitForm}
        type="primary"
      >
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
