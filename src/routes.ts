import express from "express";
import UserController from "./controllers/UserController";
import VeicController from "./controllers/VeicController";
import VendaController from "./controllers/VendaController";
import { IsAuthenticated } from "./middleware/IsAuthenticated";
import { auth } from "./routes/auth";
import { secret } from "./routes/secret";

const router = express.Router();

// AUTHENTICATION
router.post("/auth", auth);
// AUTH CONFIRM
router.get("/secret", secret);

// USER
// CREATE - PRIVADO
router.post("/users", IsAuthenticated, UserController.create);
// READ - PUBLICO
router.get("/users", UserController.findAll);
// READ - PUBLICO
router.get("/users/:userId", UserController.findOne);
// UPDATE - PRIVADO
router.put("/users/:userId", IsAuthenticated, UserController.update);
// DELETE - PRIVADO
router.delete("/users/:userId", IsAuthenticated, UserController.destroy);

// VEICULOS
// CREATE - PRIVADO
router.post("/veiculos", IsAuthenticated, VeicController.create);
// READ - PUBLICO
router.get("/veiculos", VeicController.findAll);
// READ - PUBLICO
router.get("/veiculos/:veicId", VeicController.findOne);
// UPDATE - PRIVADO
router.put("/veiculos/:veicId", IsAuthenticated, VeicController.update);
// DELETE - PRIVADO
router.delete("/veiculos/:veicId", IsAuthenticated, VeicController.delete);

// VENDAS
// READ ALL VENDAS
router.get("/vendas/:status", IsAuthenticated, VendaController.findRes);
router.get("/vendas/:status", IsAuthenticated, VendaController.findVend);
// READ ALL BY idVendedor
router.get("/vendedor/:id", IsAuthenticated, VendaController.findbyId);

export { router };
