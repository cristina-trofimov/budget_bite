import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout.tsx';

const router = createBrowserRouter([

  //any page that has the layout with the header will be a child of the root
  {
    path: "/",
    element: <Layout />,
    //this is an example of the routing I have from another project
    // children: [
    //   {
    //     index: true,
    //     element: <Navigate to="/home" replace />
    //   },
    //   {
    //     path: "home",
    //     element: <HomePage />,

    //   },
    //   {
    //     path: "quote",
    //     element: <QuotationPage />,

    //   },
    //   {
    //     path: "order",
    //     element: <OrderingPage />,
    //     children: [
    //       { path: "", element: <Navigate to="place" replace /> },
    //       { path: "place", element: <OrderPage /> },
    //       { path: "payment", element: <PaymentPage /> },
    //       { path: "review", element: <ConfirmationPage /> },
    //     ]
    //   },
    //   {
    //     path: "my-orders",
    //     element: <MyOrdersPage />,
    //   },
    //   {
    //     path: "contact-us",
    //     element: <ContactUs />,
    //   }
    // ]
  }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

