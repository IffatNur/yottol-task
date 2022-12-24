import { RouterProvider } from 'react-router';
import './App.css';
import Cards from './components/Appearance';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { router } from './routes/router';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
