import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import ProductCard from "../../Components/ProductCard";
import Card from "../../Components/Card";
import CardCopy from "../../Components/CardCopy";
import Footer from "../../Components/Footer";
import TopNavBar from '../../Components/TopNavBar/index'
import HotDeals from '../../Components/HotDeal/index';
import "./style.css";
import { getProducts } from '../../actions/getproducts'
import Skeleton from "react-loading-skeleton";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      visible: 12,
      isLoading: true,
      loadmore: false
    };

    // this.loadMore = this.loadMore.bind(this);
  }
  async componentDidMount() {
    await this.getProduct();
  }

  /**
   * gets a list of products
   */

  getProduct = async () => {
    await this.setState({
      isLoading: true
    });

   
    // loadMore = () => {
    //   this.setState(prev => {
    //     return { visible: prev.visible + 12 };
    //   });
    // }
  }
    render() {
      const count = this.state.visible;
      const { products } = this.state;
      let product_list = products ? products.slice(0, count) : null;
      return (
        <div className="">
          <div className="top">
            <TopNavBar />
            <HotDeals />
         
          </div>
          {/* <div className="wrapper"> */}
      
          <div className="products">
            {product_list && product_list.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
            <button
              type="button"
              className="btn btn-success btn-lg"
              // onClick={this.loadMore}
            >
              LOAD MORE
        </button>
          </div>
         
       
          <div className="row content-holder">
            <Card />
            <CardCopy />
          </div>
          <Footer />
        </div>
    
      );
  }
}
    console.log(this.props)
  const mapStateToProps = state => ({
    products: state.products
  
  });
  
  export default connect(mapStateToProps, { getProducts })(LandingPage);
