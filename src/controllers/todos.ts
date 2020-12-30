import { RequestHandler } from "express";
import { Todo } from "../models/todo";
const TODOS: Todo[] = [];
export const createHandler: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "document created", createdTodo: newTodo });
};
export const getHandler: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};
export const updateHandler: RequestHandler<{ id: string }> = (
  req,
  res,
  next,
) => {
  const todoId = req.params.id;
  const text = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);
  res.json({ message: "Updated todo", updatedTodo: TODOS[todoIndex] });
};
export const deleteHandler: RequestHandler<{ id: string }> = (
  req,
  res,
  next,
) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }
  TODOS.splice(todoIndex, 1);
  res.json({ message: "todo deleted" });
};
