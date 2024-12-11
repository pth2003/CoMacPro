import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  List,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    if (value.trim() !== "") {
      setTodoList([...todoList, value]);
      setValue("");
    }
  };
  const handleEdit = (index) => {
    setValue(todoList[index]);
    setEditIndex(index);
    setIsEditing(true);
  };
  const handleSaveEdit = () => {
    const updatedTodoList = [...todoList];
    updatedTodoList[editIndex] = value;
    setTodoList(updatedTodoList);
    setValue("");
    setEditIndex(null);
    setIsEditing(false);
  };
  const handleDelete = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };
  return (
    <Container>
      <Box
        sx={{ width: "100%", height: "100vh", border: "1px solid #000" }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Box
          component={"div"}
          sx={{ padding: "10px 20px ", display: "flex", gap: 2 }}
        >
          <TextField
            size="small"
            placeholder="Bạn muốn làm gì hôm nay?"
            fullWidth
            value={value}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit" onClick={handleAdd}>
            {isEditing ? "Lưu" : "Thêm"}
          </Button>
        </Box>

        <TodoList
          todoList={todoList}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Dialog open={isEditing} onClose={() => setIsEditing(false)}>
          <DialogTitle>Chỉnh sửa công việc</DialogTitle>
          <DialogContent>
            <TextField
              size="small"
              fullWidth
              value={value}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsEditing(false)}>Hủy</Button>
            <Button onClick={handleSaveEdit}>Lưu</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};
