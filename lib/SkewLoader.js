"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "25%": {
      transform: "perspective(100px) rotateX(180deg) rotateY(0)"
    },
    "50%": {
      transform: "perspective(100px) rotateX(180deg) rotateY(180deg)"
    },
    "75%": {
      transform: "perspective(100px) rotateX(0) rotateY(180deg)"
    },
    "100%": {
      transform: "perspective(100px) rotateX(0) rotateY(0)"
    }
  },
  animationName = insertKeyframesRule(keyframes),
  Loader = React.createClass({
    displayName: "Loader",
    propTypes: {
      loading: PropTypes.bool,
      color: PropTypes.string,
      size: PropTypes.string
    },
    getDefaultProps: function() {
      return {
        loading: !0,
        color: "#ffffff",
        size: "20px"
      }
    },
    getSharpStyle: function() {
      return {
        width: 0,
        height: 0,
        borderLeft: this.props.size + " solid transparent",
        borderRight: this.props.size + " solid transparent",
        borderBottom: this.props.size + " solid " + this.props.color,
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [animationName, "3s", "0s", "infinite", "cubic-bezier(.09,.57,.49,.9)"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      return assign(this.getSharpStyle(e), this.getAnimationStyle(e), {
        display: "inline-block"
      })
    },
    renderLoader: function(e) {
      return e ? React.createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, React.createElement("div", {
        style: this.getStyle()
      })) : null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
