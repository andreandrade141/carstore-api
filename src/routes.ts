import express from "express";
import UserController from "./controllers/UserController";
import VeicController from "./controllers/VeicController";
import { IsAuthenticated } from "./middleware/IsAuthenticated";
import { auth } from "./routes/auth";
import { secret } from "./routes/secret";

const router = express.Router();

// AUTH
router.post("/auth", auth);
// AUTH CONFIRM
router.get("/secret", IsAuthenticated, secret);

// USER
// CREATE
router.post("/users", IsAuthenticated, UserController.create);
// READ
router.get("/users", UserController.findAll);
// READ
router.get("/users/:userId", UserController.findOne);
// UPDATE
router.put("/users/:userId", IsAuthenticated, UserController.update);
// DELETE
router.delete("/users/:userId", IsAuthenticated, UserController.destroy);

// VEICULOS
// CREATE
router.post("/veiculos", IsAuthenticated, VeicController.create);
// READ
router.get("/veiculos", VeicController.findAll);
// READ
router.get("/veiculos/veicId", VeicController.findOne);
// UPDATE
router.put("/veiculos/veicId", IsAuthenticated, VeicController.update);
// DELETE
router.delete("/veiculos/veicId", IsAuthenticated, VeicController.delete);

export { router };
