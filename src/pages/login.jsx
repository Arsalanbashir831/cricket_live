
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const onFinish = (values) => {
    toast.success("Login Successfull!");
    console.log('Received values of form: ', values);
  };
  return (
    <>
<div className='h-[100vh] bg-[#f9f9f9] flex flex-col justify-center items-center'>
<ToastContainer  />
 <Form
      name="normal_login"
      className="login-form bg-white p-10 border"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <h1 className='text-2xl font-bold text-center p-5'>Login</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button  type="primary" htmlType="submit" className="login-form-button bg-blue-500">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
    </>
   
  );
};
export default Login;