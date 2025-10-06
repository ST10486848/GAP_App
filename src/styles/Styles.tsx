
import { StyleSheet } from "react-native";
// This is the styleshheet file for the entire app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#e1e8ed",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 14,
    color: "#657786",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1c2938",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#4a5568",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 12,
  },
  coursesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1c2938",
    marginBottom: 16,
    textAlign: "center",
  },
  courseCategory: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: "hidden",
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#4a6da7",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  arrow: {
    fontSize: 18,
    color: "white",
  },
  courseList: {
    padding: 8,
  },
  courseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#edf2f7",
  },
  courseName: {
    fontSize: 16,
    color: "#2d3748",
  },
});

export default styles;