import IconComment from "../components/icons/IconComment";
import IconExplore from "../components/icons/IconExplore";
import IconOrder from "../components/icons/IconOrder";
import IconPlay from "../components/icons/IconPlay";
import IconStudy from "../components/icons/IconStudy";
import IconUsers from "../components/icons/IconUsers";

export const menuItems: {
  title: string;
  url: string;
  icon?: React.ReactNode;
}[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconStudy className="size-5" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUsers className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý ình luận",
    icon: <IconComment className="size-5" />,
  },
];
