"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  rightRotateKeyframes = {
    "0%": {
      transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
    },
    "100%": {
      transform: "rotateX(180deg) rotateY(360deg) rotateZ(360deg)"
    }
  },
  leftRotateKeyframes = {
    "0%": {
      transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
    },
    "100%": {
      transform: "rotateX(360deg) rotateY(180deg) rotateZ(360deg)"
    }
  },
  rightRotateAnimationName = insertKeyframesRule(rightRotateKeyframes),
  leftRotateAnimationName = insertKeyframesRule(leftRotateKeyframes),
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
        size: "60px"
      }
    },
    getCircleStyle: function(e) {
      return {
        width: e,
        height: e,
        border: e / 10 + "px solid " + this.props.color,
        opacity: .4,
        borderRadius: "100%",
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        perspective: "800px",
        animation: [1 == e ? rightRotateAnimationName : leftRotateAnimationName, "2s", "0s", "infinite", "linear"].join(" "),
        animationFillMode: "forwards"
      }
    },
    getStyle: function(e) {
      var t = parseInt(this.props.size);
      return e ? assign(this.getCircleStyle(t), this.getAnimationStyle(e), {
        position: "absolute",
        top: 0,
        left: 0
      }) : {
        width: t,
        height: t,
        position: "relative"
      }
    },
    renderLoader: function(e) {
      return e ? React.createElement("div", {
        id: this.props.id,
        className: this.props.className
      }, React.createElement("div", {
        style: this.getStyle(0)
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
