/*
import prisma from '../../prisma/client';



export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

// Função para criar um novo usuário

export const createUser = async (email: string, name?: string) => {
  return await prisma.user.create({
    data: { email, name },
  });
};

export const updateUserById = async (id: number, email: string, name?: string) => {
  
  const user = await prisma.user.update({
    where: { id },
    data: { email, name },
  });
  return user;
};

export const deleteUserById = async (id: number) => {
  const existingUser = await prisma.user.findUnique({ where: { id } });
  if (!existingUser) {
    return null;
  }
  return await prisma.user.delete({
    where: { id },
  });
};

*/
