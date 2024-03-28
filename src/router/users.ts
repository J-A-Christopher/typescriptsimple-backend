import express from "express";

import { deleteUser, getAllUsers, updateUser } from "../controller/usere";
import { isOwner, isAuthenticated } from "../middlewares/idex";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
};
