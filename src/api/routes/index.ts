import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { authenticateUserController } from "../tools/AuthenticateUser";
import { createUserController } from "../tools/CreateUser";

const router = Router();

router.post('/teste', ensureAuthenticated, async (request, response) => {
  return response.status(200).json({ apiToken: request.auth})
});

router.post('/users', async (request, response) => {
  return await createUserController.handle(request, response);
});

router.post('/login', async (request, response) => {
  return await authenticateUserController.handle(request, response);
});

export { router };