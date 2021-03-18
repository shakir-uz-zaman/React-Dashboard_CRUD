import React, { Component } from 'react'
import ProductService from '../../services/ProductService';
class AddProductComponent extends Component {
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

        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                console.log("------KKKKKKKK");
                console.log(res.data.product);
                let product = res.data.product;
                this.setState({
                    title: product.title,
                    description : product.description,
                    price : product.price,
                    image : product.image,
                    previewimage : product.image,
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        
        e.preventDefault();
        if(this.state.title.length<1)
        {
            alert("Title is empty");
            return false;
        }
        if(this.state.price==null ||this.state.price== "" )
        {
            alert("Price is empty");
            return false;
        }
        if(this.state.description.length<1)
        {
            alert("Description is empty");
            return false;
        }
        const fd = new FormData();
        let product=null;
        if(this.state.id === '_add'){
            if(this.state.image == "")
        {
            alert("Image is empty");
            return false;
        }
            fd.append('image', this.state.image, this.state.image.name );
            fd.append('title',this.state.title );
            fd.append('description', this.state.description );
            fd.append('price',this.state.price );
            console.log(fd);
        }
        else
        {
             product = {
                title: this.state.title,
                price: this.state.price,
                description: this.state.description,
                image: "img",
            };
        }
       
      
        //console.log('product => ' + JSON.stringify(fd));

        // step 5
        if(this.state.id === '_add'){
            //ProductService.createProduct(product);
             ProductService.createProduct(fd).then(response =>{
                //if(response.status)
                this.props.history.push('/listproduct');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/listproduct');
            });
        }
    }
    
    changeTitleHandler=(event)=>{
        this.setState({title: event.target.value});
    }
    changeDescriptionHandler=(event)=>{
        this.setState({description: event.target.value});
    }
    changePriceHandler=(event)=>{
        this.setState({price: event.target.value});
    }
    changeImageHandler=(event)=>{
        console.log(event.target.files[0]);
        this.setState({ previewimage: URL.createObjectURL(event.target.files[0])}) ;

        this.setState({ image: event.target.files[0] });
        
    }

    cancel(){
        this.props.history.push('/listproduct');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
            return <h3 className="text-center">Update Product</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Title: </label>
                                            <input placeholder="Product Title" name="title" className="form-control" required
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" type="number" name="price" className="form-control"  required
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <textarea placeholder="Description" name="description" className="form-control"  required
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image: </label>
                                            <input required placeholder="Image" accept=".png, .jpg, .jpeg" type="file" name="image" className="form-control" 
                                                onChange={this.changeImageHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Preview Image: </label>
                                            <img style={{width:"100px"}}  src={this.state.previewimage}  alt="Upload Image"/>
                                        </div>
                                      

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddProductComponent