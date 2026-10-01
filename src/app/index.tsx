import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { CATEGORIES, Movie, MOVIES } from "./data/movies";
import { styles } from "./styles/movieStyles";

export default function HomeScreen() {
  // ==================================================
  // ESTADOS
  // ==================================================

  // Estado del buscador
  const [search, setSearch] = useState("");

  // Estado de películas favoritas
  const [favorites, setFavorites] = useState<number[]>([]);

  // Estado de película seleccionada
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Estado de categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  // Estado de calificaciones realizadas por el usuario
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});

  // ==================================================
  // FILTRAR PELÍCULAS
  // ==================================================

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

  // ==================================================
  // AGREGAR / QUITAR FAVORITOS
  // ==================================================

  const toggleFavorite = (movieId: number) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  // ==================================================
  // COMPROBAR SI ES FAVORITA
  // ==================================================

  const isFavorite = (movieId: number) => {
    return favorites.includes(movieId);
  };

  // ==================================================
  // CALIFICAR PELÍCULA
  // ==================================================

  const rateMovie = (movieId: number, rating: number) => {
    setUserRatings({
      ...userRatings,
      [movieId]: rating,
    });
  };

  // ==================================================
  // INTERFAZ
  // ==================================================

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.appName}>MovieBox</Text>

            <Text style={styles.subtitle}>
              Descubre tus películas favoritas
            </Text>
          </View>

          <View style={styles.movieIcon}>
            <Text style={styles.movieIconText}>🎬</Text>
          </View>
        </View>

        {/* PRESENTACIÓN */}

        <View style={styles.hero}>
          <Text style={styles.heroSmall}>BIENVENIDO A MOVIEBOX</Text>

          <Text style={styles.heroTitle}>
            Encuentra tu próxima película favorita
          </Text>

          <Text style={styles.heroDescription}>
            Busca películas, filtra por categoría, guarda favoritas y
            califícalas.
          </Text>
        </View>

        {/* BUSCADOR */}

        <Text style={styles.sectionTitle}>Buscar película</Text>

        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔎</Text>

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Escribe el nombre..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* RESUMEN DE FAVORITOS */}

        <View style={styles.favoriteSummary}>
          <View>
            <Text style={styles.summaryTitle}>Mis favoritas</Text>

            <Text style={styles.summaryText}>
              Tienes {favorites.length} película
              {favorites.length === 1 ? "" : "s"} guardada
              {favorites.length === 1 ? "" : "s"}.
            </Text>
          </View>

          <View style={styles.favoriteCount}>
            <Text style={styles.favoriteCountText}>{favorites.length}</Text>
          </View>
        </View>

        {/* CATEGORÍAS */}

        <Text style={styles.sectionTitle}>Categorías</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;

            return (
              <Pressable
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[
                  styles.categoryButton,
                  active && styles.categoryButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    active && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* PELÍCULA SELECCIONADA */}

        {selectedMovie && (
          <View style={styles.detailCard}>
            <View style={styles.detailHeader}>
              <Text style={styles.detailTitle}>Detalle de película</Text>

              <Pressable
                onPress={() => setSelectedMovie(null)}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>×</Text>
              </Pressable>
            </View>

            <View style={styles.detailMovie}>
              <Image
                source={{
                  uri: selectedMovie.image,
                }}
                style={styles.detailPoster}
              />

              <View style={styles.detailInfo}>
                <Text style={styles.detailMovieTitle}>
                  {selectedMovie.title}
                </Text>

                <Text style={styles.detailGenre}>
                  {selectedMovie.genre} • {selectedMovie.year}
                </Text>

                <Text style={styles.rating}>★ {selectedMovie.rating}</Text>
              </View>
            </View>

            <Text style={styles.detailDescription}>
              {selectedMovie.description}
            </Text>

            {/* CALIFICACIÓN */}

            <Text style={styles.ratingTitle}>Mi calificación</Text>

            <View style={styles.ratingStars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Pressable
                  key={star}
                  onPress={() => rateMovie(selectedMovie.id, star)}
                >
                  <Text style={styles.ratingStar}>
                    {star <= (userRatings[selectedMovie.id] || 0) ? "★" : "☆"}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* FAVORITO */}

            <Pressable
              onPress={() => toggleFavorite(selectedMovie.id)}
              style={styles.detailFavoriteButton}
            >
              <Text style={styles.detailFavoriteText}>
                {isFavorite(selectedMovie.id)
                  ? "★ Quitar de favoritas"
                  : "☆ Agregar a favoritas"}
              </Text>
            </Pressable>
          </View>
        )}

        {/* RESULTADOS */}

        <View style={styles.moviesHeader}>
          <Text style={styles.sectionTitle}>Películas</Text>

          <Text style={styles.resultsText}>
            {filteredMovies.length} resultado
            {filteredMovies.length === 1 ? "" : "s"}
          </Text>
        </View>

        {/* LISTA */}

        {filteredMovies.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyEmoji}>🎞️</Text>

            <Text style={styles.emptyTitle}>No encontramos películas</Text>

            <Text style={styles.emptyText}>
              Intenta buscar otro nombre o cambia la categoría.
            </Text>

            <Pressable
              onPress={() => {
                setSearch("");
                setSelectedCategory("Todas");
              }}
              style={styles.resetButton}
            >
              <Text style={styles.resetButtonText}>Mostrar todas</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.movieList}>
            {filteredMovies.map((movie) => {
              const favorite = isFavorite(movie.id);

              return (
                <Pressable
                  key={movie.id}
                  onPress={() => setSelectedMovie(movie)}
                  style={({ pressed }) => [
                    styles.movieCard,
                    pressed && styles.movieCardPressed,
                  ]}
                >
                  <Image
                    source={{
                      uri: movie.image,
                    }}
                    style={styles.poster}
                  />

                  <View style={styles.movieInfo}>
                    <Text style={styles.movieTitle}>{movie.title}</Text>

                    <Text style={styles.movieGenre}>{movie.genre}</Text>

                    <Text style={styles.movieYear}>{movie.year}</Text>

                    <View style={styles.ratingContainer}>
                      <Text style={styles.star}>★</Text>

                      <Text style={styles.movieRating}>{movie.rating}</Text>
                    </View>

                    {/* CONDICIONAL */}

                    {favorite && (
                      <Text style={styles.favoriteLabel}>
                        ★ En mis favoritas
                      </Text>
                    )}
                  </View>

                  {/* BOTÓN FAVORITO */}

                  <Pressable
                    onPress={(event) => {
                      event.stopPropagation();
                      toggleFavorite(movie.id);
                    }}
                    style={[
                      styles.favoriteButton,
                      favorite && styles.favoriteButtonActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.favoriteButtonText,
                        favorite && styles.favoriteButtonTextActive,
                      ]}
                    >
                      {favorite ? "★" : "☆"}
                    </Text>
                  </Pressable>
                </Pressable>
              );
            })}
          </View>
        )}

        {/* MENSAJE DE ESTADO */}

        {favorites.length > 0 && (
          <View style={styles.successCard}>
            <Text style={styles.successIcon}>✓</Text>

            <View style={styles.successInfo}>
              <Text style={styles.successTitle}>¡Lista actualizada!</Text>

              <Text style={styles.successText}>
                Tienes {favorites.length} película
                {favorites.length === 1 ? "" : "s"} en favoritas.
              </Text>
            </View>
          </View>
        )}

        {/* FAVORITAS */}

        <View style={styles.favoritesSection}>
          <Text style={styles.sectionTitle}>Mis películas favoritas</Text>

          {favorites.length === 0 ? (
            <View style={styles.noFavoritesCard}>
              <Text style={styles.noFavoritesIcon}>☆</Text>

              <Text style={styles.noFavoritesTitle}>
                Todavía no tienes favoritas
              </Text>

              <Text style={styles.noFavoritesText}>
                Presiona la estrella de una película para agregarla.
              </Text>
            </View>
          ) : (
            <View style={styles.favoriteList}>
              {MOVIES.filter((movie) => favorites.includes(movie.id)).map(
                (movie) => (
                  <Pressable
                    key={movie.id}
                    onPress={() => setSelectedMovie(movie)}
                    style={styles.favoriteItem}
                  >
                    <Image
                      source={{
                        uri: movie.image,
                      }}
                      style={styles.smallPoster}
                    />

                    <View style={styles.favoriteItemInfo}>
                      <Text style={styles.favoriteItemTitle}>
                        {movie.title}
                      </Text>

                      <Text style={styles.favoriteItemGenre}>
                        {movie.genre} • {movie.year}
                      </Text>
                    </View>

                    <Text style={styles.favoriteItemStar}>★</Text>
                  </Pressable>
                ),
              )}
            </View>
          )}
        </View>

        {/* FOOTER */}

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>MovieBox</Text>

          <Text style={styles.footerText}>
            Aplicación desarrollada con React Native para demostrar el manejo de
            estados.
          </Text>

          <Text style={styles.footerSubtext}>
            useState • TextInput • Pressable • Condicionales
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
