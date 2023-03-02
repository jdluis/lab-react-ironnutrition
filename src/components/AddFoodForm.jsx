import { Button, Form } from 'antd';
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
    console.log(event)
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      serving: serving,
    };

    props.addNewExpense(newFood);

    // limpiamos los campos desdes de crear el expense
    setName('');
    setImage('');
    setCalories(0);
    setServing(0);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={name} type="text" onChange={handleNameInput} />
      </Form.Item>
      <Form.Item
        label="image"
        name="image"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={image} type="text" onChange={handleImageInput} />
      </Form.Item>
      <Form.Item
        label="calories"
        name="calories"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={calories} type="number" onChange={handleCaloriesInput} />
      </Form.Item>
      <Form.Item
        label="serving"
        name="serving"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={serving} type="number" onChange={handleServingInput} />
      </Form.Item>
      <Form.Item>
        <Button onClick={handleSubmitForm} type="primary">Create</Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;
