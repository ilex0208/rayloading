"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "0%, 100%": {
      transform: "scale(0)"
    },
    "50%": {
      transform: "scale(1.0)"
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
        size: "60px"
      }
    },
    getBallStyle: function() {
      return {
        backgroundColor: this.props.color,
        width: this.props.size,
        height: this.props.size,
        borderRadius: "100%",
        opacity: .6,
        position: "absolute",
        top: 0,
        left: 0,
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [animationName, "2s", 1 == e ? "1s" : "0s", "infinite", "ease-in-out"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      return e ? assign(this.getBallStyle(e), this.getAnimationStyle(e)) : assign({
        width: this.props.size,
        height: this.props.size,
        position: "relative"
      })
    },
    renderLoader: function(e) {
      return e ? React.createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, React.createElement("div", {
        style: this.getStyle()
      }, React.createElement("div", {
        style: this.getStyle(1)
      }), React.createElement("div", {
        style: this.getStyle(2)
      }))) : null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
