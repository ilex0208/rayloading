"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  rotateKeyframes = {
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  bounceKeyframes = {
    "0%, 100%": {
      transform: "scale(0)"
    },
    "50%": {
      transform: "scale(1.0)"
    }
  },
  rotateAnimationName = insertKeyframesRule(rotateKeyframes),
  bounceAnimationName = insertKeyframesRule(bounceKeyframes),
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
        backgroundColor: this.props.color,
        width: e,
        height: e,
        borderRadius: "100%",
        verticalAlign: this.props.verticalAlign
      }
    },
    getAnimationStyle: function(e) {
      return {
        animation: [0 == e ? rotateAnimationName : bounceAnimationName, "2s", 2 == e ? "-1s" : "0s", "infinite", "linear"].join(" "),
        animationFillMode: "forwards"
      }
    },
    getStyle: function(e) {
      var t = parseInt(this.props.size),
        r = t / 2;
      return e ? assign(this.getBallStyle(r), this.getAnimationStyle(e), {
        position: "absolute",
        top: e % 2 ? 0 : "auto",
        bottom: e % 2 ? "auto" : 0
      }) : assign(this.getAnimationStyle(e), {
        width: t,
        height: t,
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
