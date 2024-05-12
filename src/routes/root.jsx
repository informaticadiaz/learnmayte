import App from '../App';
import Cursiva from '../components/Cursiva';
import Sumar from '../components/Sumar';
import Restar from '../components/Restar';
import ErrorPage from '../error-page';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sumar",
    element: <Sumar />,
  },
  {
    path: "restar",
    element: <Restar />,
  },
  {
    path: "cursiva",
    element: <Cursiva />,
  }
]

export default routes