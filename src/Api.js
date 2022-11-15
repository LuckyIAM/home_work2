class Api {
    constructor(token){
        this.path = 'https://api.react-learning.ru';
        this.token = token;
    }
    getProducts(){
        return(
            fetch(`${this.path}/products`, {
                headers:{
                    authorization: `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                }
            })
                
        )
    }
    getBlog(){
        return(
            fetch("https://api.react-learning.ru/v2/group-7/posts", {
                headers:{
                    authorization: `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                }
            })
                
        )
    }
}
export default Api;