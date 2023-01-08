const API_ENDPOINT = "http://localhost:8080";



export const api = {
    fetchSignIn: (keyword: any) => {

        console.log(keyword)
        return fetch(`${API_ENDPOINT}/users/create`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: keyword['email'],
          password: keyword['password'],
        }),

      }).then(res =>
        res.json()
      )
    },

    fetchLogIn: (keyword: any) => {

      console.log(keyword)
      return fetch(`${API_ENDPOINT}/users/login`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: keyword['email'],
        password: keyword['password'],
      }),

    }).then(res =>
      res.json()
    )
  },



  fetchTodos: (keyword:any)=> {
    return fetch(`${API_ENDPOINT}/todos`,{
      method:'GET',
      headers : {
        "Authorization" : keyword,
      }
    })
    .then(res=>res.json())
  },

  fetchCreateTodos: (keyword:any, token:any)=>{
    return fetch(`${API_ENDPOINT}/todos`,{
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Authorization" : token,
      },

      body: JSON.stringify({
        title: keyword['title'],
        content: keyword['contents']
      })
    }).then(res=>res.json())
  },

}