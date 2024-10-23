
### Division de Rutas

- src
    - assets
    - components
	    - matematicas
		    - restar
		    - sumar
		    - multiplicar
		    - dividir
    - pages
	    - Lengua.tsx
	    - Matematica.tsx
	    - Naturales.tsx
	    - Sociales.tsx
    - routers
	    - root.jsx

### Recomendaciones

##### Alias para rutas

```jsx
import App from '@/App';
import Matematica from '@/pages/Matematica';
import SumarUnaCifra from '@/components/matematica/sumar/SumarUnaCifra';
```

##### Agrupar rutas por contexto

```jsx
{
  path: "/matematica",
  element: <Matematica />,
  children: [
    { path: "sumar/una-cifra", element: <SumarUnaCifra /> },
    { path: "sumar/dos-cifras", element: <SumarDosCifras /> },
    { path: "restar/una-cifra", element: <RestarUnaCifra /> },
  ]
}
```

##### **Lazy loading**

*Revisar vigencia posible código deprecado*

```jsx
import { Suspense, lazy } from 'react';

const Matematica = lazy(() => import('@/pages/Matematica'));
const SumarUnaCifra = lazy(() => import('@/components/matematica/sumar/SumarUnaCifra'));

const routes = [
  {
    path: "/matematica",
    element: <Suspense fallback={<div>Loading...</div>}><Matematica /></Suspense>,
  },
];
```
