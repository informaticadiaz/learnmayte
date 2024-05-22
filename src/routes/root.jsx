import App from '../App';
// pages
import Matematica from '../pages/Matematica';
import Lengua from '../pages/Lengua';
import Sociales from '../pages/Sociales';
import Naturales from '../pages/Naturales';
import Tarea from '../pages/Tarea';
import Dictionary from '../components/Dictionary';
// components
import SumarUnaCifra from '../components/matematica/sumar/SumarUnaCifra';
import SumarDosCifras from '../components/matematica/sumar/SumarDosCifras';
import SumarTresCifras from '../components/matematica/sumar/SumarTresCifras';
// error
import ErrorPage from '../error-page';


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
    path: "/sumar/una-cifra",
    element: <SumarUnaCifra />,
  },
  {
    path: "/sumar/dos-cifras",
    element: <SumarDosCifras />,
  },
  {
    path: "/sumar/tres-cifras",
    element: <SumarTresCifras />,
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