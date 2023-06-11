import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create a new user
export const createUser = async (email: string, name: string, age: number) => {
  const user = await prisma.user.create({ data: { email, name, age } });
  return user;
};

// Fetch all users
export const fetchUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

// Sort all users
export const sortUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      age: 'asc',
    },
  });
  return users;
};

// Search a user
export const searchUser = async (query: string) => {
  const user = await prisma.user.findMany({
    where: {
      email: {
        contains: query,
      },
    },
  });
  return user;
};

// Delete User
export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return user;
};
