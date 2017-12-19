"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  keyframes = {
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
        size: "60px"
      }
    },
    getBallStyle: function(e) {
      return {
        width: e,
        height: e,
        borderRadius: "100%",
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [animationName, "0.6s", "0s", "infinite", "linear"].join(" "),
        animationFillMode: "forwards"
      }
    },
    getStyle: function(e) {
      var t = parseInt(this.props.size),
        i = t / 7;
      return 1 == e ? assign(this.getBallStyle(i), this.getAnimationStyle(e), {
        backgroundColor: this.props.color,
        opacity: "0.8",
        position: "absolute",
        top: t / 2 - i / 2
      }) : 2 == e ? assign(this.getBallStyle(t), {
        border: i + "px solid " + this.props.color,
        opacity: .1
      }) : assign(this.getAnimationStyle(e), {
        position: "relative"
      })
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
