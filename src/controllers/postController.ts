import { Request, Response } from 'express';
import * as postService from '../services/postService';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const post = await postService.getPostById(id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post não encontrado' });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  const post = await postService.createPost(title, content, authorId);
  res.status(201).json(post);
};

export const updatePostById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;
  const updatedPost = await postService.updatePostById(id, title, content);
  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).json({ error: 'Post não encontrado' });
  }
};

export const deletePostById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deletedPost = await postService.deletePostById(id);
  if (deletedPost) {
    res.json({ message: 'Post deletado com sucesso' });
  } else {
    res.status(404).json({ error: 'Post não encontrado' });
  }
};
