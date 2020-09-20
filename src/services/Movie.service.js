import http from "../http-common";

class MovieDataService {
  getAll() {
    return http.get("/movies");
  }

  get(id) {
    return http.get(`/movie/${id}`);
  }

  create(data) {
    return http.post("/movie", data);
  }

  update(id, data) {
    return http.put(`/movie/${id}`, data);
  }

  delete(id) {
    return http.delete(`/movie/${id}`);
  }
}

export default new MovieDataService();