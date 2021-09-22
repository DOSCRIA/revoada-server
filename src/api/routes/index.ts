import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { authenticateUserController } from "../useCases/authenticateUser";
import { createUserController } from "../useCases/createUser";
import { refreshTokenUserController } from "../useCases/refreshTokenUser";

const router = Router();

router.post('/teste', async (request, response) => {
  return await refreshTokenUserController.handle(request, response);
});

router.post('/users', async (request, response) => {
  return await createUserController.handle(request, response);
});

router.post('/login', async (request, response) => {
  return await authenticateUserController.handle(request, response);
});

export { router };