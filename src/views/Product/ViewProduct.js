import React, { Component } from 'react'
import ProductService from '../../services/ProductService';
class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            description: '',
            price: '',
            image: '',
        }

    }

    componentDidMount(){


            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data.product;
                this.setState({
                    title: product.title,
                    description : product.description,
                    price : product.price,
                    image : product.image,
                });
            });
                
    }


    cancel(){
        this.props.history.push('/listproduct');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                             <h3 className="text-center">View Product</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Title: </label>
                                            <input placeholder="Product Title" disabled name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price"  disabled name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <textarea placeholder="Description" disabled name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image: </label>
                                            <img style={{width:"100px"}} src={this.state.image}></img>
                                        </div>
                                      

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back to list</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default ViewProductComponent