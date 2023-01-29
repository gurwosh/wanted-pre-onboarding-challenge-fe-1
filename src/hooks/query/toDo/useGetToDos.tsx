import { AxiosResponse } from "axios";
//import { useQuery } from "react-query";
import ToDoAPI from "../../../api/toDo";
import { IToDosResponse } from "../../../types/toDo";

const useGetToDos = () => {
  
  const getTodo = () => ToDoAPI.getToDos()
  
  return[getTodo]
};

export default useGetToDos;