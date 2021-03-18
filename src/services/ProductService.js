import axios from 'axios';
const PRODUCTS_API_BASE_URL = process.env.REACT_APP_REST_SERVER+"/api/products";
const REGISTER_API_BASE_URL = process.env.REACT_APP_REST_SERVER+"/api/register";
const LOGIN_API_BASE_URL = process.env.REACT_APP_REST_SERVER+"/api/login";
var jwttoken = localStorage.getItem("jwttoken");
var token= 'Bearer '+jwttoken;
class ProductService {


    
    createProduct(product)
    {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ,
            }
          };
          return axios.post(PRODUCTS_API_BASE_URL, product,axiosConfig);

    }
    Register(reg)
    {
        return axios.post(REGISTER_API_BASE_URL, reg);
    }
    Login(login)
    {
        return axios.post(LOGIN_API_BASE_URL, login);
    }

    getProductById(productId){
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ,
            }
          };
        return axios.get(PRODUCTS_API_BASE_URL + '/' + productId,axiosConfig);
    }

    updateProduct(product, productId){
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ,
            }
          };
          return axios.put(PRODUCTS_API_BASE_URL+ '/' + productId, product,axiosConfig);    
    }

    deleteProduct(productId){
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ,
            }
          };
        return axios.delete(PRODUCTS_API_BASE_URL + '/' + productId,axiosConfig);
        
    }
    getProducts()
    {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ,
            }
          };
        return axios.get(PRODUCTS_API_BASE_URL,axiosConfig);
    }
}

export default new ProductService();