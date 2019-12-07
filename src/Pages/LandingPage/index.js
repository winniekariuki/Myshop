import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "../../Components/ProductCard";
import Card from "../../Components/CustomerCareCard";
import CardCopy from "../../Components/RetailCard";
import Footer from "../../Components/Footer";
import TopNavBar from "../../Components/TopNavBar/index";
import HotDeals from "../../Components/HotDeal/index";
import "./landingpage.css";
import { getProducts } from "../../actions/getproducts";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      done: undefined,
      viewableProducts: 12
    };
  }
  componentWillMount() {
    this.props.getProducts();
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products
    });
    setTimeout(
      function() {
        this.setState({ done: true });
      }.bind(this),
      3000
    );
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
          {!this.state.done ? (
            <div id="loading">
              <ReactLoading
                id="loader"
                type={"bars"}
                width={"150px"}
                height={"150px"}
                color={"#000000"}
              />
            </div>
          ) : (
            product_list.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          )}
       
        </div>
        <div id="loadmore-button">
        {!this.state.done || (
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={this.handleLoadMore}
            >
              LOAD MORE
            </button>
          )}
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
