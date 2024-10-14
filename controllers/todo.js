import { TodoModel } from "../models/todo.js";
import { addTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
  // write tdo database
  try {
    // validate user input
    const { error, value } = addTodoValidator.validate({
      ...req.body,
      icon: req.file?.filename
    });
    if (error) {
      // if theres an error return, dont forgot the keyword
      return res.status(422).json(error);
    }

    await TodoModel.create(value);
    // the response from the validation is the value after create
    // respond to request
    res.status(201).json("Todo was added!");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
    // fetch todos from database
    const todos = await TodoModel.find();
    // return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  res.json("Todo updated!");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deleted!");
};
