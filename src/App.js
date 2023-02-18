import './App.css';
import router from './Router/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <section className='max-w-[980px] mx-auto'>

      <RouterProvider router={router}></RouterProvider>

      <Toaster></Toaster>
    </section>
  );
}

export default App;
