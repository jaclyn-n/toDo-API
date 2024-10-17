import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true }
}, 
{
  timestamps: true
});

todoSchema.plugin(toJSON);

export const TodoModel = model("Todo", todoSchema);
