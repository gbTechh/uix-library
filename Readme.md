## Uix Library

Para usar sol odeb es instalar emotion

```
npm i @emotion/core @emotion/react @emotion/styled
```

Para usar el tema debes importar

```
import { useChangeTheme } from './uixlib/context/provider';

function App() {
const { changeTheme} = useChangeTheme();
return (
  <Component />
)
}
```

E envolver el provider en el index principal de la app

```
 import App from './App';
  import Provider from './uixlib/context/provider';
  import Uix from './uixlib/Uix';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider>
        <Uix>
          <App />
        </Uix>
      </Provider>
    </React.StrictMode>
  );
```
