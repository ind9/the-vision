"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ProductCard = function (_React$Component) {
  _inherits(ProductCard, _React$Component);

  function ProductCard(props) {
    _classCallCheck(this, ProductCard);

    return _possibleConstructorReturn(this, (ProductCard.__proto__ || Object.getPrototypeOf(ProductCard)).call(this, props));
  }

  _createClass(ProductCard, [{
    key: "renderBuyButton",
    value: function renderBuyButton(props) {
      return React.createElement(
        "div",
        { className: "card card-block product-card" },
        React.createElement(
          "div",
          { className: "image" },
          React.createElement("img", { src: props.image, alt: props.image, className: "img-rounded" })
        ),
        React.createElement(
          "div",
          { className: "info" },
          React.createElement(
            "div",
            { className: "title-wrap" },
            React.createElement(
              "h6",
              { className: "title" },
              props.title
            )
          ),
          React.createElement(
            "h6",
            { className: "price" },
            props.price
          )
        ),
        React.createElement(
          "a",
          { href: props.link, className: "btn btn-primary", target: "_blank" },
          "Buy Now"
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.type === 'buy-button') return this.renderBuyButton(this.props);

      return React.createElement(
        "div",
        { className: "card card-block product-card", onClick: function onClick(event) {
            return _this2.props.onClick(event, _this2.props);
          } },
        React.createElement(
          "div",
          { className: "image" },
          React.createElement("img", { src: this.props.image, alt: this.props.image, className: "img-rounded" })
        ),
        React.createElement(
          "div",
          { className: "info" },
          React.createElement(
            "div",
            { className: "title-wrap" },
            React.createElement(
              "h6",
              { className: "title" },
              this.props.title
            )
          ),
          [this.props.brand && React.createElement(
            "div",
            { className: "brand", key: "brand" },
            "by ",
            this.props.brand
          ), !isNaN(this.props.offers) && this.props.offers >= 0 && React.createElement(
            "div",
            { className: "offers", key: "offers" },
            React.createElement(
              "span",
              { className: "count" },
              this.props.offers,
              " offer",
              this.props.offers <= 1 ? '' : 's'
            )
          ), this.props.price && React.createElement(
            "h6",
            { className: "price", key: "price" },
            "from ",
            this.props.price
          ), !isNaN(this.props.stores) && this.props.stores >= 0 && React.createElement(
            "div",
            { className: "stores", key: "stores" },
            "Available in ",
            this.props.stores == 0 ? 'no' : this.props.stores,
            " store",
            this.props.stores <= 1 ? '' : 's'
          )]
        )
      );
    }
  }]);

  return ProductCard;
}(React.Component);

ProductCard.propTypes = {
  type: React.PropTypes.oneOf(['buy-button', 'info']),
  image: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  brand: React.PropTypes.string,
  offers: React.PropTypes.number,
  price: React.PropTypes.string,
  stores: React.PropTypes.number,
  onClick: React.PropTypes.func
};

ProductCard.defaultProps = {
  type: 'buy-button',
  onClick: function onClick(x) {
    return x;
  }
};

module.exports = ProductCard;