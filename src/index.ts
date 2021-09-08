import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

const { API_PORT, APP_NAME } = process.env;

app.get('/', async (req, res) => {
  
  try {
    
    const teste = await prisma.users.create({
      data: {
        name: 'Gustavo',
        lastName: 'Rigoni',
        email: 'gustrigoni@gmail.com'
      }
    })

    res.send(teste);


  } catch (e)  {
    res.status(400).send(e);
  }


});

app.listen(API_PORT, () => {
  console.log(`-- Listening ${APP_NAME}'s API on port ${API_PORT} --`)
});