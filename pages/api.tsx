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

}