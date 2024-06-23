import { PrismaClient, Comment } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllComments = async () => {
  return await prisma.comment.findMany({

  });
};

export const getCommentById = async (id: number) => {
  return await prisma.comment.findUnique({
    where: { id },
    include: {
      author: true,
      post: true,
    },
  });
};

export const createComment = async (content: string, postId: number, authorId: number) => {
  // Verificar se o post existe
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error(`Post com ID ${postId} não encontrado`);
  }

  return await prisma.comment.create({
    data: { content, postId, authorId },
    include: {
      author: true,
      post: true,
    },
  });
};

export const updateCommentById = async (id: number, content: string) => {
  const existingComment = await prisma.comment.findUnique({ where: { id } });
  if (!existingComment) {
    return null;
  }
  return await prisma.comment.update({
    where: { id },
    data: { content },
    include: {
      author: true,
      post: true,
    },
  });
};

export const deleteCommentById = async (id: number) => {
  const existingComment = await prisma.comment.findUnique({ where: { id } });
  if (!existingComment) {
    return null;
  }
  return await prisma.comment.delete({
    where: { id },
  });
};
