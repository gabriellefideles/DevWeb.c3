import { Request, Response } from 'express';
import * as commentService from '../services/commentService';

export const getAllComments = async (req: Request, res: Response) => {
  const comments = await commentService.getAllComments();
  res.json(comments);
};

export const getCommentById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const comment = await commentService.getCommentById(id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comentário não encontrado' });
  }
};

export const createComment = async (req: Request, res: Response) => {
  const { content, postId, authorId } = req.body;
  const comment = await commentService.createComment(content, postId, authorId);
  res.status(201).json(comment);
};

export const updateCommentById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { content } = req.body;
  const updatedComment = await commentService.updateCommentById(id, content);
  if (updatedComment) {
    res.json(updatedComment);
  } else {
    res.status(404).json({ error: 'Comentário não encontrado' });
  }
};

export const deleteCommentById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deletedComment = await commentService.deleteCommentById(id);
  if (deletedComment) {
    res.json({ message: 'Comentário deletado com sucesso!' });
  } else {
    res.status(404).json({ error: 'Comentário não encontrado' });
  }
};
