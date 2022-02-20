import { Users } from "./users";
import { prisma } from "./../client"

async function seeding(): Promise<void> {

  // loop users seeds
  for (let user of Users) {
    await prisma.users.create({
      data: user
    })
  }

}

seeding()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

