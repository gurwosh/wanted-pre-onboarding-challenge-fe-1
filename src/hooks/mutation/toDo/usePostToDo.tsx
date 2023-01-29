import { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from 'next/router'

import ToDoAPI from "../../../api/toDo";
import { IToDoForm, IToDoByIdResponse } from "../../../types/toDo";

const usePostToDo = () => {
  //const queryClient = useQueryClient();
  const router = useRouter();
  const useMutation= ((data: IToDoForm) => ToDoAPI.createToDo(data).then((data)=> {
       console.log(data.data.data.id) 
      //router.push(`/home/${data.data.data.id}`);
    //   queryClient.invalidateQueries(["getToDos"]);
    })
  );


  return[useMutation]
};

export default usePostToDo;