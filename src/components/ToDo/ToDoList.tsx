import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import useDeleteToDo from "../../hooks/mutation/toDo/useDeleteToDo";
import usePutToDo from "../../hooks/mutation/toDo/usePutToDo";
import useGetToDos from "../../hooks/query/toDo/useGetToDos";
import { IToDoListProps } from "./types";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<undefined | string>("");
  const [getTodo] = useGetToDos()
  //const { mutate: putToDoMutate } = usePutToDo();
 // const { mutate: deleteToDoMutate } = useDeleteToDo();

  useEffect(()=>{
    getTodo().then((data)=>{console.log(data)})
  })

  // const ToDoListProps: IToDoListProps = {
  //   onPutToDo: () => putToDoMutate,
  //   onDeleteToDo: (id) => deleteToDoMutate(id),
  //   onGoToDetail: (id) => {
  //     setSelectedId(id);
  //     router.push(`/todos/${id}`);
  //   },
  // //  isLoading,
  //   toDoList: data,
  //   selectedId,
  // };

 // return <ToDoListView {...ToDoListProps} />;
 return <div>hello!</div>
};

export default ToDoList;
