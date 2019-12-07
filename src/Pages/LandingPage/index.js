import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard";
import Card from "../../Components/CustomerCareCard";
import CardCopy from "../../Components/RetailCard";
import Footer from "../../Components/Footer";
import TopNavBar from "../../Components/TopNavBar/index";
import HotDeals from "../../Components/HotDeal/index";
import "./landingpage.css";
import { getProducts } from "../../actions/getproducts";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
      viewableProducts: 12
    };
  }
  componentWillMount() {
    this.props.getProducts();
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products,
    });
  }
  handleLoadMore = () => {
    this.setState(prev => {
      return { viewableProducts: prev.viewableProducts + 12 };
    });
  };

  render() {
    const count = this.state.viewableProducts;
    const { products } = this.state;
    let product_list = products ? products.slice(0, count) : null;
    return (
      <div className="">
        <div className="top">
          <TopNavBar />
          <HotDeals />
        </div>

        <div className="products">
          {product_list.map((product, index) => (
            <ProductCard product={product} key={index} />
            
            ))}
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={this.handleLoadMore}
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

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { getProducts })(LandingPage);
