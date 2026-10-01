# MovieBox

Aplicación móvil desarrollada con **React Native, Expo y TypeScript**, orientada a la consulta e interacción con un catálogo de películas.

El proyecto fue desarrollado como parte del trabajo práctico **"Manejo de Estados"**, cuyo objetivo es aplicar estados en una aplicación móvil mediante `useState`, entradas de usuario con `TextInput`, acciones mediante `Pressable` y lógica condicional para modificar la interfaz de manera inmediata.

---

## 1. Descripción del proyecto

**MovieBox** es una aplicación móvil que permite al usuario explorar un catálogo de películas y realizar diferentes acciones sobre ellas.

La aplicación presenta información como:

- Nombre de la película.
- Género.
- Año de lanzamiento.
- Calificación.
- Imagen de la película.
- Descripción.
- Categoría.
- Estado de favorito.
- Calificación realizada por el usuario.

Además, el usuario puede interactuar con las películas mediante diferentes controles de la interfaz.

Entre las principales acciones disponibles se encuentran:

- Buscar películas.
- Filtrar películas por categoría.
- Seleccionar una película.
- Agregar películas a favoritos.
- Quitar películas de favoritos.
- Visualizar la cantidad de películas favoritas.
- Calificar una película de 1 a 5 estrellas.
- Visualizar mensajes y secciones dependiendo de los estados actuales.

---

# 2. Objetivo

El objetivo principal del proyecto es demostrar el **manejo de estados en React Native** mediante una aplicación funcional.

La aplicación utiliza diferentes estados para controlar la información que cambia durante la interacción del usuario.

El trabajo cumple con los requisitos principales de la actividad:

- Uso explícito de `useState`.
- Mínimo de dos estados.
- Uso de `TextInput`.
- Uso de `Pressable`.
- Acciones realizadas por el usuario.
- Modificación de estados.
- Cambios visibles inmediatamente en la interfaz.
- Uso de condiciones `&&`.
- Uso de operador ternario.

Aunque la actividad solicita como mínimo dos estados, MovieBox implementa **cinco estados principales** para demostrar diferentes situaciones de interacción.

---

# 3. Tecnologías utilizadas

## React Native

Framework utilizado para desarrollar la interfaz de la aplicación móvil.

Permite utilizar componentes como:

- `View`
- `Text`
- `Image`
- `TextInput`
- `Pressable`
- `ScrollView`
- `SafeAreaView`

---

## Expo

Expo permite desarrollar y ejecutar la aplicación React Native de manera más sencilla.

El proyecto puede ejecutarse mediante:

```bash
npx expo start
```

Expo proporciona las herramientas necesarias para iniciar el servidor de desarrollo y ejecutar la aplicación en diferentes plataformas.

---

## TypeScript

TypeScript permite trabajar con tipado estático.

En el proyecto se utiliza, por ejemplo, para definir la estructura de una película:

```tsx
export type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
  description: string;
};
```

Expo proporciona soporte de primera clase para TypeScript.

---

## Expo Router

El proyecto utiliza la estructura de rutas proporcionada por Expo Router.

La pantalla principal se encuentra en:

```text
src/app/index.tsx
```

Expo Router permite organizar las pantallas utilizando una estructura basada en archivos.

---

# 4. Estructura del proyecto

La estructura principal utilizada en MovieBox es:

```text
MovieBox/
│
├── src/
│   └── app/
│       │
│       ├── index.tsx
│       │
│       ├── data/
│       │   └── movies.ts
│       │
│       └── styles/
│           └── movieStyles.ts
│
├── assets/
│
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```

---

# 5. Descripción de los archivos

## `src/app/index.tsx`

Es la pantalla principal de la aplicación.

En este archivo se encuentra principalmente la lógica relacionada con:

- Estados.
- Eventos.
- Búsqueda.
- Favoritos.
- Selección de películas.
- Selección de categorías.
- Calificaciones.
- Renderizado condicional.
- Filtrado de películas.

Los estados principales de la aplicación se encuentran en este archivo para que el manejo de estados pueda ser revisado fácilmente.

---

## `src/app/data/movies.ts`

Contiene la información utilizada para mostrar las películas.

También contiene las categorías disponibles.

Ejemplo de estructura:

```tsx
export type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
  description: string;
};
```

Las películas se almacenan en el arreglo:

```tsx
export const MOVIES: Movie[] = [
  // películas
];
```

Las categorías se almacenan en:

```tsx
export const CATEGORIES = [
  "Todas",
  "Acción",
  "Ciencia ficción",
  "Terror",
  "Animación",
  "Drama",
];
```

Separar los datos de la pantalla permite mantener el archivo principal más organizado.

---

## `src/app/styles/movieStyles.ts`

Contiene los estilos utilizados por la aplicación.

Los estilos se manejan mediante `StyleSheet.create()`.

Esto permite separar:

```text
Lógica
   ↓
index.tsx

Datos
   ↓
data/movies.ts

Estilos
   ↓
styles/movieStyles.ts
```

De esta manera, el código principal se concentra en la funcionalidad y manejo de estados.

---

# 6. Estados utilizados

MovieBox utiliza cinco estados principales mediante `useState`.

```tsx
const [search, setSearch] = useState("");

const [favorites, setFavorites] = useState<number[]>([]);

const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

const [selectedCategory, setSelectedCategory] = useState("Todas");

const [userRatings, setUserRatings] = useState<Record<number, number>>({});
```

Cada estado tiene una función diferente dentro de la aplicación.

---

# 7. Estado de búsqueda

El primer estado es:

```tsx
const [search, setSearch] = useState("");
```

Este estado almacena el texto que el usuario escribe en el buscador.

La aplicación utiliza un `TextInput`:

```tsx
<TextInput
  value={search}
  onChangeText={setSearch}
  placeholder="Escribe el nombre..."
  placeholderTextColor="#777"
/>
```

Cuando el usuario escribe, `onChangeText` ejecuta `setSearch`.

Por ejemplo:

```text
Estado inicial:

search = ""
```

El usuario escribe:

```text
Spider
```

Entonces el estado pasa a:

```text
search = "Spider"
```

La lista de películas se actualiza y solamente se muestran las películas que coinciden con el texto ingresado.

`TextInput` es un componente de React Native destinado a recibir texto mediante el teclado y permite reaccionar a cambios mediante `onChangeText`.

---

# 8. Estado de favoritos

El segundo estado es:

```tsx
const [favorites, setFavorites] = useState<number[]>([]);
```

Este estado almacena los identificadores de las películas que el usuario ha agregado a favoritos.

Inicialmente:

```text
favorites = []
```

Cuando el usuario presiona la estrella de una película, se ejecuta:

```tsx
const toggleFavorite = (movieId: number) => {
  if (favorites.includes(movieId)) {
    setFavorites(favorites.filter((id) => id !== movieId));
  } else {
    setFavorites([...favorites, movieId]);
  }
};
```

Si la película no está en favoritos:

```text
☆ Spider-Man
```

Al presionarla:

```text
★ Spider-Man
```

Y el contador cambia:

```text
Mis favoritas: 0
```

a:

```text
Mis favoritas: 1
```

La película también aparece en la sección:

```text
Mis películas favoritas
```

Si el usuario vuelve a presionar la estrella, la película se elimina de favoritos.

Este estado demuestra claramente una acción del usuario que modifica un estado y produce un cambio visible inmediatamente.

---

# 9. Estado de película seleccionada

El tercer estado es:

```tsx
const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
```

Este estado permite almacenar la película que el usuario seleccionó.

Cuando el usuario presiona una película:

```tsx
onPress={() => setSelectedMovie(movie)}
```

El estado pasa de:

```text
selectedMovie = null
```

a contener la película seleccionada.

Por ejemplo:

```text
selectedMovie = Spider-Man
```

En ese momento aparece la información detallada de la película.

Para cerrar el detalle se utiliza:

```tsx
setSelectedMovie(null);
```

Por lo tanto, el estado controla si existe o no una película seleccionada.

---

# 10. Estado de categoría

El cuarto estado es:

```tsx
const [selectedCategory, setSelectedCategory] = useState("Todas");
```

Este estado controla la categoría seleccionada.

Inicialmente:

```text
selectedCategory = "Todas"
```

El usuario puede seleccionar categorías como:

```text
Todas
Acción
Ciencia ficción
Terror
Animación
Drama
```

Cuando se presiona una categoría:

```tsx
onPress={() => setSelectedCategory(category)}
```

el estado cambia.

Por ejemplo:

```text
selectedCategory = "Acción"
```

Entonces la aplicación muestra solamente las películas pertenecientes a esa categoría.

---

# 11. Estado de calificaciones

El quinto estado es:

```tsx
const [userRatings, setUserRatings] = useState<Record<number, number>>({});
```

Este estado almacena las calificaciones realizadas por el usuario.

La aplicación permite seleccionar entre:

```text
★ ★ ★ ★ ★
```

El usuario puede seleccionar una cantidad de estrellas.

La función utilizada es:

```tsx
const rateMovie = (movieId: number, rating: number) => {
  setUserRatings({
    ...userRatings,
    [movieId]: rating,
  });
};
```

Por ejemplo, si el usuario asigna 4 estrellas a una película:

```text
userRatings = {
  4: 4
}
```

El número representa el identificador de la película y el valor representa la calificación.

---

# 12. Filtrado de películas

La aplicación combina el estado de búsqueda y el estado de categoría para obtener las películas que deben mostrarse.

Se utiliza:

```tsx
const filteredMovies = useMemo(() => {
  return MOVIES.filter((movie) => {
    const searchMatch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      selectedCategory === "Todas" || movie.genre === selectedCategory;

    return searchMatch && categoryMatch;
  });
}, [search, selectedCategory]);
```

La búsqueda depende de:

```text
search
```

y la categoría depende de:

```text
selectedCategory
```

Por ejemplo:

```text
Búsqueda: Spider
Categoría: Acción
```

La aplicación muestra las películas que cumplen ambas condiciones.

---

# 13. Uso de `TextInput`

Uno de los requisitos de la actividad es utilizar un componente de entrada de datos.

MovieBox utiliza:

```tsx
<TextInput value={search} onChangeText={setSearch} />
```

El usuario puede escribir directamente en la aplicación.

La información ingresada modifica el estado:

```text
Usuario escribe
      ↓
TextInput
      ↓
onChangeText
      ↓
setSearch()
      ↓
search cambia
      ↓
lista de películas cambia
```

---

# 14. Uso de `Pressable`

Otro requisito de la actividad es utilizar una acción mediante interacción del usuario.

MovieBox utiliza `Pressable` para diferentes acciones.

Por ejemplo, para favoritos:

```tsx
<Pressable onPress={() => toggleFavorite(movie.id)}>
  <Text>{favorite ? "★" : "☆"}</Text>
</Pressable>
```

También se utiliza para:

- Seleccionar películas.
- Seleccionar categorías.
- Cerrar el detalle.
- Calificar películas.
- Agregar o quitar favoritos.

`Pressable` es un componente de React Native que permite detectar interacciones de presión sobre sus elementos hijos.

---

# 15. Lógica condicional

La aplicación utiliza diferentes formas de lógica condicional.

## Condición `&&`

Para mostrar una etiqueta cuando una película es favorita:

```tsx
{
  favorite && <Text>★ En mis favoritas</Text>;
}
```

La etiqueta solamente aparece cuando:

```text
favorite = true
```

---

## Condición para mostrar favoritos

También se utiliza:

```tsx
{
  favorites.length > 0 && <View>...</View>;
}
```

Esto significa que la sección solamente se muestra cuando existe al menos una película favorita.

---

## Condición para mostrar el detalle

La película seleccionada se muestra mediante:

```tsx
{
  selectedMovie && <View>...</View>;
}
```

Si:

```text
selectedMovie = null
```

no se muestra el detalle.

Si existe una película seleccionada, se muestra su información.

---

## Operador ternario

También se utiliza una condición ternaria:

```tsx
{
  favorite ? "★" : "☆";
}
```

Esto permite cambiar inmediatamente el símbolo dependiendo del estado.

Si la película es favorita:

```text
★
```

Si no es favorita:

```text
☆
```

---

# 16. Cumplimiento de los requisitos de la actividad

| Requisito                | Implementación en MovieBox                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| `useState` mínimo 2      | Se utilizan 5 estados                                                                    |
| `TextInput`              | Buscador de películas                                                                    |
| `Pressable`              | Favoritos, categorías, películas y estrellas                                             |
| Acción del usuario       | Escribir, presionar, seleccionar y calificar                                             |
| Modificación del estado  | `setSearch`, `setFavorites`, `setSelectedMovie`, `setSelectedCategory`, `setUserRatings` |
| Cambio visible inmediato | Búsqueda, favoritos, detalle, categorías y estrellas                                     |
| Condicional `&&`         | Secciones que aparecen según el estado                                                   |
| Operador ternario        | Cambio entre `☆` y `★`                                                                   |
| Interfaz móvil           | Componentes de React Native                                                              |
| Datos separados          | `data/movies.ts`                                                                         |
| Estilos separados        | `styles/movieStyles.ts`                                                                  |

---

# 17. Flujo principal de la aplicación

El flujo general de MovieBox es:

```text
                    INICIO
                      │
                      ▼
              Lista de películas
                      │
          ┌───────────┼────────────┐
          │           │            │
          ▼           ▼            ▼
       Buscar      Categoría    Seleccionar
          │           │          película
          ▼           ▼            │
       search    selectedCategory  ▼
          │           │         Detalle
          └───────┬───┘            │
                  │                │
                  ▼                ▼
             Lista filtrada    Calificación
                                     │
                                     ▼
                               userRatings

                  Película
                     │
                     ▼
                  Favorito
                     │
                     ▼
                 favorites
                     │
                     ▼
             Mis favoritas
```

---

# 18. Flujo del estado de favoritos

Un ejemplo práctico del funcionamiento es:

```text
Usuario ve una película
        ↓
Presiona ☆
        ↓
toggleFavorite()
        ↓
setFavorites()
        ↓
favorites cambia
        ↓
La interfaz se actualiza
        ↓
☆ cambia a ★
        ↓
El contador aumenta
        ↓
La película aparece en favoritos
```

Si vuelve a presionar:

```text
★
↓
toggleFavorite()
↓
setFavorites()
↓
La película se elimina
↓
★ cambia a ☆
↓
El contador disminuye
```

---

# 19. Flujo del buscador

```text
Usuario escribe "Spider"
          ↓
       TextInput
          ↓
     setSearch()
          ↓
     search cambia
          ↓
 filteredMovies se recalcula
          ↓
Se muestran los resultados
```

El cambio se puede observar inmediatamente en la pantalla.

---

# 20. Flujo de calificación

```text
Usuario selecciona película
          ↓
 setSelectedMovie(movie)
          ↓
Se muestra el detalle
          ↓
Usuario selecciona estrellas
          ↓
      rateMovie()
          ↓
   setUserRatings()
          ↓
userRatings se actualiza
          ↓
Las estrellas cambian visualmente
```

---

# 21. Datos de las películas

Cada película contiene información estructurada mediante el tipo `Movie`.

Los campos principales son:

| Campo         | Tipo     | Descripción                  |
| ------------- | -------- | ---------------------------- |
| `id`          | `number` | Identificador de la película |
| `title`       | `string` | Nombre de la película        |
| `genre`       | `string` | Género                       |
| `year`        | `number` | Año de lanzamiento           |
| `rating`      | `number` | Calificación de referencia   |
| `image`       | `string` | URL de la imagen             |
| `description` | `string` | Descripción de la película   |

Actualmente el catálogo contiene películas de diferentes géneros, entre ellos:

- Acción.
- Ciencia ficción.
- Terror.
- Animación.
- Drama.

---

# 22. Interfaz de usuario

La interfaz está diseñada específicamente para dispositivos móviles.

La pantalla principal contiene:

1. Encabezado de MovieBox.
2. Sección principal.
3. Buscador.
4. Contador de favoritos.
5. Categorías.
6. Lista de películas.
7. Acciones de favoritos.
8. Detalle de película.
9. Sistema de calificación.
10. Sección de películas favoritas.
11. Información final de la aplicación.

La interfaz utiliza una combinación de colores oscuros, tarjetas, imágenes de películas y elementos interactivos para facilitar la navegación.

---

# 23. Instalación del proyecto

Para instalar el proyecto se necesita tener instalado:

- Node.js en una versión LTS.
- npm.
- Expo.
- Un editor de código como Visual Studio Code.

Expo recomienda utilizar Node.js LTS para trabajar con proyectos Expo.

Después de clonar o descargar el proyecto, ingresar a la carpeta:

```bash
cd MovieBox
```

Instalar las dependencias:

```bash
npm install
```

---

# 24. Ejecución del proyecto

Para iniciar el servidor de desarrollo:

```bash
npx expo start
```

Expo mostrará las opciones disponibles para ejecutar la aplicación.

También se puede utilizar:

```bash
npx expo start -c
```

El parámetro `-c` permite iniciar Expo limpiando la caché de desarrollo.

---

# 25. Ejecución en navegador

Para visualizar el proyecto en el navegador, se puede iniciar:

```bash
npx expo start
```

y posteriormente seleccionar la opción correspondiente para web.

Expo permite utilizar el mismo proyecto para desarrollar aplicaciones que pueden ejecutarse en Android, iOS y web.

---

# 26. Ejecución en dispositivo móvil

Para probar la aplicación en un dispositivo físico se puede utilizar Expo Go.

Pasos:

1. Ejecutar:

```bash
npx expo start
```

2. Esperar a que aparezca el código QR.
3. Abrir Expo Go en el dispositivo.
4. Escanear el código QR.
5. Esperar a que cargue MovieBox.

Para una conexión local, el equipo y el dispositivo deben poder comunicarse por la misma red.

---

# 27. Ejemplo de demostración para la actividad

Para demostrar el manejo de estados durante la presentación se puede realizar el siguiente procedimiento.

## Demostración 1 — Búsqueda

Primero se muestra la lista completa.

Luego:

```text
Escribir: Spider
```

La aplicación actualiza inmediatamente los resultados.

Se puede explicar:

> "Aquí estoy utilizando el estado `search`. Cuando escribo en el `TextInput`, se ejecuta `setSearch` y la lista de películas se actualiza."

---

## Demostración 2 — Favoritos

Seleccionar una película y presionar la estrella.

Antes:

```text
Mis favoritas: 0
☆ Spider-Man
```

Después:

```text
Mis favoritas: 1
★ Spider-Man
```

Se puede explicar:

> "Aquí utilizo el estado `favorites`. Al presionar la estrella ejecuto `setFavorites`, cambio el estado y la interfaz se actualiza inmediatamente."

---

## Demostración 3 — Selección de película

Presionar una película.

La aplicación muestra:

- Imagen.
- Nombre.
- Género.
- Año.
- Descripción.
- Calificación.
- Botón de favorito.
- Estrellas.

Se puede explicar:

> "El estado `selectedMovie` almacena la película que seleccioné y permite mostrar su información detallada."

---

## Demostración 4 — Categoría

Seleccionar:

```text
Acción
```

La lista cambia y muestra las películas correspondientes.

Se puede explicar:

> "El estado `selectedCategory` almacena la categoría seleccionada y se utiliza para filtrar las películas."

---

## Demostración 5 — Calificación

Seleccionar una película y después presionar una cantidad de estrellas.

Por ejemplo:

```text
★ ★ ★ ★ ☆
```

Se puede explicar:

> "El estado `userRatings` almacena la calificación que el usuario asignó a la película."

---

# 28. Estados mínimos solicitados

La actividad solicita como mínimo dos estados.

MovieBox supera este requisito utilizando cinco:

```text
1. search
2. favorites
3. selectedMovie
4. selectedCategory
5. userRatings
```

Los dos estados más fáciles de demostrar durante la presentación son:

### Estado 1

```tsx
const [search, setSearch] = useState("");
```

Controla el buscador.

### Estado 2

```tsx
const [favorites, setFavorites] = useState<number[]>([]);
```

Controla las películas favoritas.

Estos dos estados permiten demostrar claramente:

```text
useState
   ↓
Acción del usuario
   ↓
Cambio del estado
   ↓
Cambio visible en la interfaz
```

---

# 29. Organización del código

El proyecto separa las responsabilidades principales.

```text
index.tsx
    │
    ├── Estados
    ├── Eventos
    ├── Lógica
    └── Interfaz

movies.ts
    │
    └── Datos de películas

movieStyles.ts
    │
    └── Estilos
```

Esta organización facilita la lectura y mantenimiento del proyecto.

También permite que la parte más importante de la actividad, que es el manejo de estados, pueda identificarse rápidamente dentro de `index.tsx`.

---

# 30. Consideraciones técnicas

Los estados utilizados en la aplicación pertenecen al componente principal y se actualizan mediante sus respectivas funciones `set`.

Cada modificación del estado provoca que React Native vuelva a renderizar la parte correspondiente de la interfaz con los nuevos valores.

Por ejemplo:

```tsx
setFavorites([...favorites, movieId]);
```

actualiza el estado de favoritos.

Posteriormente, elementos como:

```tsx
favorites.length;
```

y:

```tsx
favorite ? "★" : "☆";
```

utilizan el nuevo valor para mostrar la información actualizada.

---

# 31. Resultado esperado

Al ejecutar MovieBox, el usuario debe poder:

```text
✓ Visualizar películas
✓ Buscar películas
✓ Filtrar por categoría
✓ Seleccionar una película
✓ Ver detalles
✓ Agregar favoritos
✓ Quitar favoritos
✓ Ver contador de favoritos
✓ Ver lista de favoritos
✓ Calificar películas
✓ Ver cambios inmediatamente
```

---

# 32. Conclusión

La implementación de MovieBox permitió aplicar el manejo de estados en una aplicación móvil desarrollada con React Native y Expo.

Se implementaron cinco estados principales mediante `useState`: búsqueda, favoritos, película seleccionada, categoría seleccionada y calificaciones.

Además, se utilizaron `TextInput` y `Pressable` para permitir la interacción del usuario, junto con condiciones `&&` y operadores ternarios para controlar la información que se muestra en pantalla.

La aplicación demuestra que las acciones realizadas por el usuario pueden modificar los estados y producir cambios visibles inmediatamente en la interfaz. De esta manera, el proyecto cumple con los requisitos establecidos para la práctica de **Manejo de Estados**.

---

# 33. Referencias

- React Native — documentación oficial: https://reactnative.dev/
- React Native — `TextInput`: https://reactnative.dev/docs/textinput.html
- React Native — `Pressable`: https://reactnative.dev/docs/pressable
- Expo — documentación oficial: https://docs.expo.dev/
- Expo — creación de proyectos: https://docs.expo.dev/get-started/create-a-project/
- Expo — inicio de desarrollo: https://docs.expo.dev/get-started/start-developing/
