import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Map from './routes/Map';
import Filter from './routes/Filter';
import State from './routes/State';
import Props from './routes/Props';
import Form from './routes/Form';
import RESTApi from './routes/RESTApi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/state",
    element: <State />,
  },
  {
    path: "/props",
    element: <Props />,
  },
  {
    path: "/forms",
    element: <Form />
  },
  {
    path: "/restapi",
    element: <RESTApi />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
