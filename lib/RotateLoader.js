"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
    "0%": {
      transform: "rotate(0deg)"
    },
    "50%": {
      transform: "rotate(180deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
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
        animation: [animationName, "1s", "0s", "infinite", "cubic-bezier(.7,-.13,.22,.86)"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      return e ? assign(this.getBallStyle(e), {
        opacity: "0.8",
        position: "absolute",
        top: 0,
        left: e % 2 ? -28 : 25
      }) : assign(this.getBallStyle(e), this.getAnimationStyle(e), {
        display: "inline-block",
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
