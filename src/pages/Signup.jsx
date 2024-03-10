import  { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulating API call for registration

    setTimeout(() => {
      console.log('Received values:', values);
      setLoading(false);
      toast.success("Signup Successfull!");
      form.resetFields();
      // You can add logic here to redirect to another page after successful registration
    }, 2000);
  };

  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
     <ToastContainer/>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Invalid email format!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="bg-blue-500 w-full">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
