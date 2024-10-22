import App from "../App";
// pages
import Matematica from "../pages/Matematica";
import Lengua from "../pages/Lengua";
import Sociales from "../pages/Sociales";
import Naturales from "../pages/Naturales";
import Tarea from "../pages/Tarea";
import Dictionary from "../components/Dictionary";
// Incrementar
import Incremento110 from "../components/matematica/incremento/Incremento110";
// components sumar
import SumarUnaCifra from "../components/matematica/sumar/SumarUnaCifra";
import SumarDosCifras from "../components/matematica/sumar/SumarDosCifras";
import SumarTresCifras from "../components/matematica/sumar/SumarTresCifras";
// componentes restar
import RestarUnaCifra from "../components/matematica/restar/RestarUnaCifra";
import RestarDosCifras from "../components/matematica/restar/RestarDosCifras";
import RestarTresCifras from "../components/matematica/restar/RestarTresCifras";
// componentes multiplicar
import MultiplicarX4 from "../components/matematica/multiplicar/MultiplicarX4";
import Multiplicar from "../components/matematica/multiplicar/Multiplicar";
import Tablas from "../components/matematica/multiplicar/Tablas";
// trivia
import Trivia from "../components/trivia/Trivia";
// error
import ErrorPage from "../error-page";
import Cursiva from "../components/Cursiva";
import MainLayout from "../layout/MainLayout";

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
      // *-* Matematica *-* //
      {
        path: "/matematica",
        element: <Matematica />,
      },
      // *-* sumar *-* //
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
      // *-* restar *-* //
      {
        path: "/restar/una-cifra",
        element: <RestarUnaCifra />,
      },
      {
        path: "/restar/dos-cifras",
        element: <RestarDosCifras />,
      },
      {
        path: "/restar/tres-cifras",
        element: <RestarTresCifras />,
      },
      // *-* incrementar *-* //
      {
        path: "/incrementar/incremento",
        element: <Incremento110 />,
      },
      // *-* multiplicar *-* // 
      {
        path: "/multiplicar/tablas",
        element: <Tablas />,
      },
      {
        path: "multiplicar/multiplicar",
        element: <Multiplicar />,
      },
      {
        path: "multiplicar/cuatro-cifras",
        element: <MultiplicarX4 />,
      },
      // *-* trivia *-* //
      {
        path: "/trivia",
        element: <Trivia />,
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
];

export default routes;
