import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Form from './components/form/Form';
import NotFonud from './components/notfound/NotFonud';
import Verify from './components/verify/Verify';
import Login from './components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Signup/>}/>
      <Route path='verify' element={<Verify/>} />
      <Route path='login' element={<Login/>} />
      <Route path='home' element={<Home/>} />
      <Route path='jobform' element={<Form/>} />
      <Route path='*' element={<NotFonud/>}/>
    </Route>
  )
)



function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
