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
];

import { Search, ShoppingCart } from "lucide-react";

export const navIcons = [
  { to: "/products", icon: Search, ariaLabel: "Search products" },
  { to: "/cart", icon: ShoppingCart, ariaLabel: "Cart" },
];

export const SliderData = [
  {
    id: 1,
    title: "Discover Collection",
    desc: "New Women Fashion Arrivals.",
    cover: {
      mobile: Womens_Mobile,
      desktop: Womens,
    },
  },
  {
    id: 2,
    title: "Elegance is Elimination",
    desc: "I make clothes make fashion.",
    cover: {
      mobile: Child_Mobile,
      desktop: Child,
    },
  },
  {
    id: 3,
    title: "In a world full of Trends",
    desc: "Fashions Fade style is eternal.",
    cover: {
      mobile: Mens_Mobile,
      desktop: Mens,
    },
  },
];
