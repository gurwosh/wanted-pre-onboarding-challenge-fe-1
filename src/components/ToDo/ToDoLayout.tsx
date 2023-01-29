import { useState } from "react";
import { useRouter } from 'next/router'
import { IChildrenProps } from "../../types/children";
import { IToDoLayoutProps } from "./types";
import ToDoLayoutView from "./Views/ToDoLayoutView";

const ToDoLayout = ({ children }: IChildrenProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isHomePage = router.pathname === "/home";

  const ToDoLayoutProps: IToDoLayoutProps = {
    onOpenModal: () => setOpen(true),
    onCloseModal: () => setOpen(false),
    open,
    children,
    isHomePage,
  };

  return <ToDoLayoutView {...ToDoLayoutProps} />;
};

export default ToDoLayout;