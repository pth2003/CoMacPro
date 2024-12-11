import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export const TodoList = ({ todoList, onEdit, onDelete }) => {
  return (
    <List>
      {todoList.map((todo, index) => (
        <ListItem
          key={index}
          sx={{ border: "1px solid #ccc", width: "80%", margin: "0 auto" }}
        >
          <ListItemText primary={todo} />
          <ListItemIcon sx={{ gap: 2 }}>
            <Button onClick={() => onEdit(index)}>
              <EditIcon />
            </Button>
            <Button onClick={() => onDelete(index)}>
              <DeleteIcon />
            </Button>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};
