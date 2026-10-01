export type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  image: string;
  description: string;
};

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Acción",
    year: 2019,
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "Los héroes se reúnen para intentar revertir los acontecimientos que cambiaron el universo.",
  },
  {
    id: 2,
    title: "Interestelar",
    genre: "Ciencia ficción",
    year: 2014,
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Un grupo de exploradores viaja por el espacio buscando un nuevo hogar para la humanidad.",
  },
  {
    id: 3,
    title: "El Conjuro",
    genre: "Terror",
    year: 2013,
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxuFK9R7A8Qd4G6.jpg",
    description:
      "Una familia busca ayuda después de experimentar fenómenos extraños en su nueva casa.",
  },
  {
    id: 4,
    title: "Spider-Man",
    genre: "Acción",
    year: 2021,
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description:
      "Un joven héroe debe enfrentarse a nuevos enemigos mientras intenta proteger a quienes quiere.",
  },
  {
    id: 5,
    title: "Toy Story",
    genre: "Animación",
    year: 1995,
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    description:
      "Los juguetes cobran vida cuando los humanos no están presentes y viven diferentes aventuras.",
  },
  {
    id: 6,
    title: "Joker",
    genre: "Drama",
    year: 2019,
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "Un hombre atraviesa una serie de acontecimientos que transforman completamente su vida.",
  },
];

export const CATEGORIES = [
  "Todas",
  "Acción",
  "Ciencia ficción",
  "Terror",
  "Animación",
  "Drama",
];
