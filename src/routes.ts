import express from "express";
import UserController from "./controllers/UserController";
import VeicController from "./controllers/VeicController";

const router = express.Router();

// USER
// CREATE
router.post("/users", UserController.create);
// READ
router.get("/users", UserController.findAll);
// READ
router.get("/users/:userId", UserController.findOne);
// UPDATE
router.put("/users/:userId", UserController.update);
// DELETE
router.delete("/users/:userId", UserController.destroy);

// VEICULOS
// CREATE
router.post("/veiculos", VeicController.create);
// READ
router.get("/veiculos", VeicController.findAll);
// READ
router.get("/veiculos/veicId", VeicController.findOne);
// UPDATE
router.put("/veiculos/veicId", VeicController.update);
// DELETE
router.delete("/veiculos/veicId", VeicController.delete);

export { router };
