import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0D0D0F",
  },

  container: {
    flex: 1,
    backgroundColor: "#0D0D0F",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  appName: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
  },

  subtitle: {
    color: "#999999",
    fontSize: 13,
    marginTop: 4,
  },

  movieIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#E5B94A",
    alignItems: "center",
    justifyContent: "center",
  },

  movieIconText: {
    fontSize: 24,
  },

  hero: {
    backgroundColor: "#18181C",
    borderRadius: 22,
    padding: 24,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#29292F",
  },

  heroSmall: {
    color: "#E5B94A",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    lineHeight: 33,
    fontWeight: "800",
    marginBottom: 12,
  },

  heroDescription: {
    color: "#A5A5AA",
    fontSize: 14,
    lineHeight: 21,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  searchContainer: {
    height: 54,
    backgroundColor: "#18181C",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#29292F",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
  },

  favoriteSummary: {
    backgroundColor: "#211F17",
    borderRadius: 18,
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#514525",
  },

  summaryTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  summaryText: {
    color: "#A9A49A",
    fontSize: 12,
    marginTop: 4,
  },

  favoriteCount: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#E5B94A",
    alignItems: "center",
    justifyContent: "center",
  },

  favoriteCountText: {
    color: "#17140B",
    fontSize: 18,
    fontWeight: "800",
  },

  categories: {
    paddingBottom: 8,
    gap: 9,
  },

  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#18181C",
    borderWidth: 1,
    borderColor: "#2A2A2F",
  },

  categoryButtonActive: {
    backgroundColor: "#E5B94A",
    borderColor: "#E5B94A",
  },

  categoryText: {
    color: "#A6A6AB",
    fontSize: 13,
    fontWeight: "600",
  },

  categoryTextActive: {
    color: "#15130C",
    fontWeight: "800",
  },

  detailCard: {
    backgroundColor: "#18181C",
    borderRadius: 20,
    padding: 18,
    marginTop: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#3A3628",
  },

  detailHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  detailTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  closeButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#29292F",
    alignItems: "center",
    justifyContent: "center",
  },

  closeText: {
    color: "#FFFFFF",
    fontSize: 25,
  },

  detailMovie: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailPoster: {
    width: 85,
    height: 115,
    borderRadius: 15,
    backgroundColor: "#25252B",
    marginRight: 15,
  },

  detailInfo: {
    flex: 1,
  },

  detailMovieTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 6,
  },

  detailGenre: {
    color: "#9C9CA2",
    fontSize: 13,
    marginBottom: 8,
  },

  rating: {
    color: "#E5B94A",
    fontSize: 14,
    fontWeight: "700",
  },

  detailDescription: {
    color: "#A7A7AC",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 17,
    marginBottom: 15,
  },

  ratingTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 7,
  },

  ratingStars: {
    flexDirection: "row",
    marginBottom: 15,
  },

  ratingStar: {
    color: "#E5B94A",
    fontSize: 28,
    marginRight: 5,
  },

  detailFavoriteButton: {
    backgroundColor: "#E5B94A",
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
  },

  detailFavoriteText: {
    color: "#17140B",
    fontSize: 13,
    fontWeight: "800",
  },

  moviesHeader: {
    marginTop: 20,
  },

  resultsText: {
    color: "#77777D",
    fontSize: 12,
    marginBottom: 14,
  },

  movieList: {
    gap: 12,
  },

  movieCard: {
    backgroundColor: "#18181C",
    borderRadius: 18,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#28282D",
  },

  movieCardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }],
  },

  poster: {
    width: 75,
    height: 100,
    borderRadius: 14,
    backgroundColor: "#25252B",
    marginRight: 13,
  },

  movieInfo: {
    flex: 1,
    paddingRight: 8,
  },

  movieTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 5,
  },

  movieGenre: {
    color: "#99999F",
    fontSize: 12,
    marginBottom: 3,
  },

  movieYear: {
    color: "#77777D",
    fontSize: 11,
    marginBottom: 7,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  star: {
    color: "#E5B94A",
    fontSize: 14,
    marginRight: 4,
  },

  movieRating: {
    color: "#D7D7DB",
    fontSize: 12,
    fontWeight: "700",
  },

  favoriteLabel: {
    color: "#E5B94A",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 5,
  },

  favoriteButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#242429",
    alignItems: "center",
    justifyContent: "center",
  },

  favoriteButtonActive: {
    backgroundColor: "#E5B94A",
  },

  favoriteButtonText: {
    color: "#A9A9AF",
    fontSize: 23,
  },

  favoriteButtonTextActive: {
    color: "#17140B",
  },

  emptyCard: {
    backgroundColor: "#18181C",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#29292F",
  },

  emptyEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 8,
  },

  emptyText: {
    color: "#88888E",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 18,
  },

  resetButton: {
    backgroundColor: "#E5B94A",
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 12,
  },

  resetButtonText: {
    color: "#17140B",
    fontWeight: "800",
    fontSize: 13,
  },

  successCard: {
    backgroundColor: "#172017",
    borderRadius: 16,
    padding: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#304430",
  },

  successIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#70B870",
    color: "#102010",
    textAlign: "center",
    lineHeight: 34,
    fontSize: 18,
    fontWeight: "900",
    marginRight: 12,
  },

  successInfo: {
    flex: 1,
  },

  successTitle: {
    color: "#D7F0D7",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 3,
  },

  successText: {
    color: "#8EA88E",
    fontSize: 11,
    lineHeight: 16,
  },

  favoritesSection: {
    marginTop: 28,
  },

  noFavoritesCard: {
    backgroundColor: "#18181C",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#29292F",
  },

  noFavoritesIcon: {
    color: "#55555B",
    fontSize: 38,
    marginBottom: 8,
  },

  noFavoritesTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 7,
  },

  noFavoritesText: {
    color: "#7E7E84",
    textAlign: "center",
    fontSize: 12,
    lineHeight: 18,
  },

  favoriteList: {
    gap: 10,
  },

  favoriteItem: {
    backgroundColor: "#18181C",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#29292F",
  },

  smallPoster: {
    width: 50,
    height: 65,
    borderRadius: 10,
    backgroundColor: "#25252B",
    marginRight: 12,
  },

  favoriteItemInfo: {
    flex: 1,
  },

  favoriteItemTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
  },

  favoriteItemGenre: {
    color: "#7F7F85",
    fontSize: 11,
  },

  favoriteItemStar: {
    color: "#E5B94A",
    fontSize: 22,
    marginRight: 5,
  },

  footer: {
    marginTop: 35,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: "#25252A",
    alignItems: "center",
  },

  footerTitle: {
    color: "#E5B94A",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
  },

  footerText: {
    color: "#707077",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 17,
    maxWidth: 300,
  },

  footerSubtext: {
    color: "#4F4F55",
    fontSize: 10,
    marginTop: 10,
    textAlign: "center",
  },
});
