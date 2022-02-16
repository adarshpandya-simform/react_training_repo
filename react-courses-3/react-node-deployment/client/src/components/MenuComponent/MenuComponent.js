import { Menu, MenuItem, MenuDivider } from "@chakra-ui/react";

// MenuComponent: for rendering Menu
const MenuComponent = () => {
  return (
    <Menu size="sm" isOpen={false}>
      <MenuItem>Item1</MenuItem>
      <MenuDivider />
      <MenuItem>Item2</MenuItem>
    </Menu>
  );
};

export default MenuComponent;
