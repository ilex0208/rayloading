"use strict";

function random(e) {
  return Math.random() * e
}
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "0%": {
      transform: "scale(1)"
    },
    "50%": {
      transform: "scale(0.5)",
      opacity: .7
    },
    "100%": {
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
      var t = random(100) / 100 + .6 + "s",
        r = random(100) / 100 - .2 + "s";
      return {
        animation: [animationName, t, r, "infinite", "ease"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      return assign(this.getBallStyle(e), this.getAnimationStyle(e), {
        display: "inline-block"
      })
    },
    renderLoader: function(e) {
      if (e) {
        var t = {
          width: 3 * parseFloat(this.props.size) + 6 * parseFloat(this.props.margin),
          fontSize: 0
        };
        return React.createElement("div", {
          id: this.props.id,
          className: this.props.className
        }, React.createElement("div", {
          style: t
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
        }), React.createElement("div", {
          style: this.getStyle(6)
        }), React.createElement("div", {
          style: this.getStyle(7)
        }), React.createElement("div", {
          style: this.getStyle(8)
        }), React.createElement("div", {
          style: this.getStyle(9)
        })))
      }
      return null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
