import App from '../App';
// pages
import Matematica from '../pages/Matematica';
import Lengua from '../pages/Lengua';
import Sociales from '../pages/Sociales';
import Naturales from '../pages/Naturales';
import Tarea from '../pages/Tarea';
import Dictionary from '../components/Dictionary';
// components sumar
import SumarUnaCifra from '../components/matematica/sumar/SumarUnaCifra';
import SumarDosCifras from '../components/matematica/sumar/SumarDosCifras';
import SumarTresCifras from '../components/matematica/sumar/SumarTresCifras';
import Cursiva from '../components/Cursiva';
// componentes restar
import RestarUnaCifra from '../components/matematica/restar/RestarUnaCifra';
// componentes multiplicar
import MultiplicarX4 from '../components/matematica/multiplicar/MultiplicarX4';
import Multiplicar from '../components/matematica/multiplicar/Multiplicar';
import Tablas from '../components/matematica/multiplicar/Tablas';
// error
import ErrorPage from '../error-page';

import MainLayout from '../layout/MainLayout';

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
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
        path: "/restar/una-cifra",
        element: <RestarUnaCifra />,
      },
      {
        path: "/multiplicar/tablas",
        element: <Tablas />,
      },
      {
        path: "multiplicar/multiplicar",
        element: <Multiplicar />
      },
      {
        path: "multiplicar/cuatro-cifras",
        element: <MultiplicarX4 />
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
        path: "cursiva",
        element: <Cursiva />,
      },
      {
        path: "/diccionario",
        element: <Dictionary />,
      },
    ],
  },
  
]

export default routes