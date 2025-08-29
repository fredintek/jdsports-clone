import { HeartOutlined, GlobalOutlined } from "@ant-design/icons";
import BackToSchool from "./link-details/BackToSchool";
import Men from "./link-details/Men";
import Women from "./link-details/Women";
import Kids from "./link-details/Kids";
import Accessories from "./link-details/Accessories";
import Brands from "./link-details/Brands";
import Collections from "./link-details/Collections";
import OnlyAtJD from "./link-details/OnlyAtJD";
import NewIn from "./link-details/NewIn";
import EgiftCard from "./link-details/EgiftCard";
import Savings from "./link-details/Savings";

export const topDataLinks = [
  {
    title: "My Account ( Login/Signup )",
  },
  {
    title: "Find a store",
  },
  {
    title: "Help",
  },
  {
    title: "Track my order",
  },
  {
    title: "Wishlist",
    icon: HeartOutlined,
  },
  {
    title: "Deliver to...",
    icon: GlobalOutlined,
  },
];

export const navlinks = [
  {
    label: "Back to school",
    component: null,
  },
  {
    label: "Men",
    component: Men,
  },
  {
    label: "Women",
    component: Women,
  },
  {
    label: "Kids",
    component: Kids,
  },
  {
    label: "Accessories",
    component: Accessories,
  },
  {
    label: "Brands",
    component: Brands,
  },
  {
    label: "Collections",
    component: Collections,
  },
  {
    label: "Only at JD",
    component: OnlyAtJD,
  },
  {
    label: "New in",
    component: NewIn,
  },
  {
    label: "eGiftcard",
    component: null,
  },
  {
    label: "Savings",
    component: Savings,
  },
];
