import { api } from "./api";

const AuthServise = {
    async register(auth) {
        const res = await api.post("/api/user/register", auth);
        return res;
    },
    async login(auth) {
        const res = await api.post("/api/user/login", auth);
        return res;
    },
};

export default AuthServise;