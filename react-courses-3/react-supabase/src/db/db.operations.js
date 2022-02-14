import { supabase } from "./db.config";

// helper fn for inserting todo
export const insertTodo = async (title, completed) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, completed }]);
  return { data, error };
};

// helper fn for getting all todos
export const getTodos = async () => {
  const { data, error } = await supabase.from("todos").select("*");
  return { data, error };
};

// helper fn for getting only completed todos
export const getCompletedTodos = async () => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("completed", true);
  return { data, error };
};

// helper fn for getting only incompleted todos
export const getIncompletedTodos = async () => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("completed", false);
  return { data, error };
};

// helper fn for deleting todo
export const deleteTodo = async (id) => {
  const { data, error } = await supabase.from("todos").delete().eq("id", id);
  return { data, error };
};

// helper fn for updating todo
export const updateTodo = async (id, completed) => {
  const { data, error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id);
  return { data, error };
};
