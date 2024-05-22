import App from '../App';
import Matematica from '../pages/Matematica';
import Lengua from '../pages/Lengua';
import Sociales from '../pages/Sociales';
import Naturales from '../pages/Naturales';
import ErrorPage from '../error-page';
import Tarea from '../pages/Tarea';
import Dictionary from '../components/Dictionary';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/matematica",
    element: <Matematica />,
  },
  {
    path: "/lengua",
    element: <Lengua />,
  },
  {
    path: "/sociales",
    element: <Sociales />,
  },
  {
    path: "/naturales",
    element: <Naturales />,
  },
  {
    path: "/tarea",
    element: <Tarea />,
  },
  {
    path: "/diccionario",
    element: <Dictionary />,
  },
]

export default routes