import App from '../App';
import Cursiva from '../components/Cursiva';
import Sumar from '../components/Sumar';
import ErrorPage from '../error-page';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sumar",
    element: <Sumar />,
  },
  {
    path: "/cursiva",
    element: <Cursiva />,
  }
]

export default routes