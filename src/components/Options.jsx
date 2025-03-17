import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { UpdateBookField } from "../utils/booksUtility";
import { useGetAllBookQuery, useUpdateBookMutation } from "../redux/api";
import { setValue } from "../redux/slices/searchSlice";

const options = ["Remove"];

const ITEM_HEIGHT = 48;

export default function Options({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();
  const { data } = useGetAllBookQuery();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  //on close click handler
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  // remove click handler
  async function removeClickHandler(event) {
    event.stopPropagation();
    const updatedBook = UpdateBookField(data, title, false);
    const { id } = updatedBook;
    await updateBook({ id, updatedData: updatedBook });
    navigate("/user");
    dispatch(setValue(""));
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            id="remove"
            selected={option === "Pyxis"}
            onClick={removeClickHandler}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
