import React, { Component } from 'react'
import ProductService from '../../services/ProductService'
import {

    Card,
    Button,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Table,
  } from 'reactstrap';
class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [],

                products: []
        }
        
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
    }

    deleteProduct(id){
    
         ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
         });
    }
    viewProduct(id){
        this.props.history.push(`/viewproduct/${id}`);
    }
    editProduct(id){
        this.props.history.push(`/addproduct/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((response)=>{
            console.log(response);
            if(response.data.success)
            {
                this.setState({products:response.data.products})
            }          
        });
        
      
    }

    addProduct(){
        this.props.history.push('/addproduct/_add');
    }

    render() {
        let sl=1;
        return (
            <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Products List 
                
                        </CardHeader>
                        <Row>
                            <Col md={2} className="float-right mb-3 mb-xl-0">
                                  <Button onClick={this.addProduct} block color="primary">Add New Product</Button>
                            </Col>

                        </Row>
                       
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th> #</th>
                                    <th> Product Title</th>
                                    <th> Description</th>
                                    <th> Price</th>
                                    <th> Image</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                               {    
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.id}>
                                             <td>{ sl++ }</td>   
                                             <td> { product.title} </td>   
                                             <td> {product.description}</td>
                                             <td> {product.price}</td>
                                             <td>      
                                                  <img style={{width:"75px"}}  src={product.image}  alt="IMG"/>
                                            </td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            
                            </tbody>
                        </Table>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

            
        )
    }
}

export default ListProductComponent