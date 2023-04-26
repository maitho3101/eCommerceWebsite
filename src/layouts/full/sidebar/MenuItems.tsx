import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconBasket,
  IconShoppingCart,
  IconPlus,
  IconBook,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Bài viết",
  },

  {
    id: uniqueId(),
    title: "Danh sách bài viết",
    icon: IconBook,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Tạo bài viết mới",
    icon: IconPlus,
    href: "/posts/create",
  },

  {
    navlabel: true,
    subheader: "Sản phẩm",
  },
  {
    id: uniqueId(),
    title: "Danh sách sản phẩm",
    icon: IconBasket,
    href: "/items",
  },
  {
    id: uniqueId(),
    title: "Thêm sản phẩm mới",
    icon: IconPlus,
    href: "/items/create",
  },
  {
    navlabel: true,
    subheader: "Đơn hàng",
  },
  {
    id: uniqueId(),
    title: "Danh sách đơn hàng",
    icon: IconShoppingCart,
    href: "/orders",
  },
];

export default Menuitems;
