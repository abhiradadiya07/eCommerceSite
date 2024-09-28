import Child_Mobile from "/Images/Child-Mobile.jpg";
import Child from "/Images/Child.jpg";
import Mens from "/Images/Mens.jpg";
import Mens_Mobile from "/Images/Mens-Mobile.jpg";
import Womens from "/Images/Womens.jpg";
import Womens_Mobile from "/Images/Womens-Mobile.jpg";
export const slider = [
  {
    img: {
      mobile: Womens_Mobile,
      desktop: Womens,
    },
    title: "Discover Collection",
    description: "New Women Fashion Arrivals.",
  },
  {
    img: {
      mobile: Child_Mobile,
      desktop: Child,
    },
    title: "Elegance is Elimination",
    description: "I make clothes make fashion.",
  },
  {
    img: {
      mobile: Mens_Mobile,
      desktop: Mens,
    },
    title: "In a world full of Trends",
    description: "Fashions Fade style is eternal.",
  },
];

export const navLinks = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Products" },
  { to: "/about", text: "About Us" },
  { to: "/contact", text: "Contact Us" },
];

import { Search, Heart, User, ShoppingCart } from "lucide-react";

export const navIcons = [
  { to: "/products", icon: Search, ariaLabel: "Search products" },
  { to: "/wishlist", icon: Heart, ariaLabel: "Wishlist" },
  { to: "/login", icon: User, ariaLabel: "Login" },
  { to: "/cart", icon: ShoppingCart, ariaLabel: "Cart" },
];
