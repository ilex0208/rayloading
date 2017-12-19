"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "0%": {
      transform: "scaley(1.0)"
    },
    "50%": {
      transform: "scaley(0.4)"
    },
    "100%": {
      transform: "scaley(1.0)"
    }
  },
  animationName = insertKeyframesRule(keyframes),
  Loader = React.createClass({
    displayName: "Loader",
    propTypes: {
      loading: PropTypes.bool,
      color: PropTypes.string,
      height: PropTypes.string,
      width: PropTypes.string,
      margin: PropTypes.string,
      radius: PropTypes.string
    },
    getDefaultProps: function() {
      return {
        loading: !0,
        color: "#ffffff",
        height: "35px",
        width: "4px",
        margin: "2px",
        radius: "2px"
      }
    },
    getLineStyle: function() {
      return {
        backgroundColor: this.props.color,
        height: this.props.height,
        width: this.props.width,
        margin: this.props.margin,
        borderRadius: this.props.radius,
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [animationName, "1s", .1 * e + "s", "infinite", "cubic-bezier(.2,.68,.18,1.08)"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      return assign(this.getLineStyle(e), this.getAnimationStyle(e), {
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
