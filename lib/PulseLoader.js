"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "0%": {
      transform: "scale(1)",
      opacity: 1
    },
    "45%": {
      transform: "scale(0.1)",
      opacity: .7
    },
    "80%": {
      transform: "scale(1)",
      opacity: 1
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
        animation: [animationName, "0.75s", .12 * e + "s", "infinite", "cubic-bezier(.2,.68,.18,1.08)"].join(" "),
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
