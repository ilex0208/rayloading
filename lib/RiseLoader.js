"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  riseAmount = 30,
  keyframesEven = {
    "0%": {
      transform: "scale(1.1)"
    },
    25: {
      transform: "translateY(-" + riseAmount + "px)"
    },
    "50%": {
      transform: "scale(0.4)"
    },
    "75%": {
      transform: "translateY(" + riseAmount + "px)"
    },
    "100%": {
      transform: "translateY(0) scale(1.0)"
    }
  },
  keyframesOdd = {
    "0%": {
      transform: "scale(0.4)"
    },
    25: {
      transform: "translateY(" + riseAmount + "px)"
    },
    "50%": {
      transform: "scale(1.1)"
    },
    "75%": {
      transform: "translateY(-" + riseAmount + "px)"
    },
    "100%": {
      transform: "translateY(0) scale(0.75)"
    }
  },
  animationNameEven = insertKeyframesRule(keyframesEven),
  animationNameOdd = insertKeyframesRule(keyframesOdd),
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
        animation: [e % 2 == 0 ? animationNameEven : animationNameOdd, "1s", "0s", "infinite", "cubic-bezier(.15,.46,.9,.6)"].join(" "),
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
      }), React.createElement("div", {
        style: this.getStyle(4)
      }), React.createElement("div", {
        style: this.getStyle(5)
      })) : null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
