import App from '../App';
import Cursiva from '../components/Cursiva';
import Sumar from '../components/Sumar';
import Restar from '../components/Restar';
import AntesyDespues from '../components/AntesyDespues';
import ErrorPage from '../error-page';
import Tarea from '../pages/Tarea';

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
    path: "/restar",
    element: <Restar />,
  },
  {
    path: "/cursiva",
    element: <Cursiva />,
  },
  {
    path: "/antesydespues",
    element: <AntesyDespues />,
  },
  {
    path: "/tarea",
    element: <Tarea />,
  }
]

export default routes