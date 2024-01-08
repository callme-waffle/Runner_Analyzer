import authHandler from "./auth.handlers";
import userHandler from "./user.handlers";

export default [
    ...authHandler,
    ...userHandler,
]