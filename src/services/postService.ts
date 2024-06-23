import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllPosts = async () => {
  return await prisma.post.findMany({
    include: {
      comments: {

      },
    },
  });
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({ 
    where: { id },
    include: {
      comments: {
        include: {
          author: true,
        },
      },
    },
  });
};

export const createPost = async (title: string, content: string, authorId: number) => {
  return await prisma.post.create({
    data: { title, content, authorId },
    include: {
      author: true,
    },
  });
};

export const updatePostById = async (id: number, title: string, content: string) => {
  const existingPost = await prisma.post.findUnique({ where: { id } });
  if (!existingPost) {
    return null;
  }
  return await prisma.post.update({
    where: { id },
    data: { title, content },
    include: {
      author: true,
      comments: {
        include: {
          author: true,
        },
      },
    },
  });
};

export const deletePostById = async (id: number) => {
  const existingPost = await prisma.post.findUnique({ where: { id } });
  if (!existingPost) {
    return null;
  }
  return await prisma.post.delete({
    where: { id },
  });
};
