import { api } from "./api";

api.interceptors.request.use((req) => {
    if (localStorage.getItem("x-token")) {
        req.headers.Authorization = localStorage.getItem("x-token");
    };

    return req;
});

const AuthServise = {
    // auth
    async register(auth) {
        const res = api.post("/api/user/register", auth);
        return res;
    },
    async login(auth) {
        const res = api.post("/api/user/login", auth);
        return res;
    },
    async getAuth(id) {
        const res = api.get(`/api/user/${id}`);
        return res;
    },


    // product
    async createNewProduct(product) {
        const res = api.post("/api/product/create", product);
        return res;
    },
    async getAllProducts() {
        const res = api.get("/api/product");
        return res;
    },
};

export default AuthServise;