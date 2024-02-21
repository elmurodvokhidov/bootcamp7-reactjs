import { api } from "./api";

const AuthServise = {
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
};

export default AuthServise;