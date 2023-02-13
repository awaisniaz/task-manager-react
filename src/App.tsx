
import './App.css';
import Login from './components/login';
import Register from './components/login/register';
import ForgetPassword from './components/login/forgetPassword';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResetPassword from './components/login/resetPassword';
import Home from './components/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Login />
      ),
    },
    {
      path: "/register",
      element: (<Register />)
    },
    {
      path: "/forgetpassword",
      element: (<ForgetPassword />)
    },
    {
      path: "/resetPassword",
      element: (<ResetPassword />)
    },
    {
      path: "/",
      element: (<Home />)
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
