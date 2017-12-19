"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "33%": {
      transform: "translateY(10px)"
    },
    "66%": {
      transform: "translateY(-10px)"
    },
    "100%": {
      transform: "translateY(0)"
    }
  },
  animationName = insertKeyframesRule(keyframes),
  Loader = React.createClass({
    displayName: "Loader",
    propTypes: {
      loading: PropTypes.bool,
      color: PropTypes.string,
      size: PropTypes.string,
      margin: PropTypes.string
    },
    getDefaultProps: function() {
      return {
        loading: !0,
        color: "#ffffff",
        size: "15px",
        margin: "2px"
      }
    },
    getBallStyle: function() {
      return {
        backgroundColor: this.props.color,
        width: this.props.size,
        height: this.props.size,
        margin: this.props.margin,
        borderRadius: "100%",
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [animationName, "0.6s", .07 * e + "s", "infinite", "ease-in-out"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      return assign(this.getBallStyle(e), this.getAnimationStyle(e), {
        display: "inline-block"
      })
    },
    renderLoader: function(e) {
      return e ? React.createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, React.createElement("div", {
        style: this.getStyle(1)
      }), React.createElement("div", {
        style: this.getStyle(2)
      }), React.createElement("div", {
        style: this.getStyle(3)
      })) : null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
