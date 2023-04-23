import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
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
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Tạo bài viết mới",
    icon: IconLayoutDashboard,
    href: "/posts/create",
  },
];

export default Menuitems;
