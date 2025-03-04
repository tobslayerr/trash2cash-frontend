import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import logo from "../assets/logo.png";

export const Trash2CashLogo = () => {
  return (
    <Link href="/" className="hidden sm:block" >
      <img src={logo} alt="Trash2Cash Logo" width="60" height="36" />
    </Link>
  );
};

export default function App() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Scan", path: "/scan" },
    { name: "Rewards", path: "/rewards" },
    { name: "DropZone", path: "/dropzone" },
    { name: "Impact Tracker", path: "/impact-tracker" },
    { name: "Challenge", path: "/challenge" },
    { name: "Streak", path: "/streak" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Wallet", path: "/wallet" },
    { name: "Tips", path: "/tips" },
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Trash2CashLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Trash2CashLogo />
        </NavbarBrand>
        <Dropdown>
          <DropdownTrigger>
            <Button color="primary" variant="solid">Menu</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Menu Options">
            {menuItems.map((item, index) => (
              <DropdownItem key={index} as={Link} href={item.path}>
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end">
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              src="https://i.pravatar.cc/300"
              alt="User Profile"
              className="cursor-pointer"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Options">
            <DropdownItem as={Link} href="/">Profile</DropdownItem>
            <DropdownItem as={Link} href="/" color="danger">Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link className="w-full" color="foreground" href={item.path} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
