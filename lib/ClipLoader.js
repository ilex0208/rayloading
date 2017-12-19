"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "0%": {
      transform: "rotate(0deg) scale(1)"
    },
    "50%": {
      transform: "rotate(180deg) scale(0.8)"
    },
    "100%": {
      transform: "rotate(360deg) scale(1)"
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
        size: "35px"
      }
    },
    getBallStyle: function() {
      return {
        width: this.props.size,
        height: this.props.size,
        border: "2px solid",
        borderColor: this.props.color,
        borderBottomColor: "transparent",
        borderRadius: "100%",
        background: "transparent !important",
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [animationName, "0.75s", "0s", "infinite", "linear"].join(" "),
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
        style: this.getStyle()
      })) : null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
