import Layout from "./pagess/Layout/Layout";
import Profile from "./pagess/profile/Profile";
import Login from "./pagess/login/Login";
import Register from "./pagess/rgister/Register";
import Home from "./pagess/home/Home";
import ForgetPassword from '../src/components/ForgetPassword/ForgetPassword'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/create' element={<Register />} />
      <Route path='/reset-password' element={<ForgetPassword />} />
      <Route path="" element={<Layout />}>
        <Route path='/home/:email' element={<Home />} />
        <Route path='/profile/:email' element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
