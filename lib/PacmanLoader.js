"use strict";
var React = require("react"),
  assign = require("domkit/appendVendorPrefix"),
  insertKeyframesRule = require("domkit/insertKeyframesRule"),
  animations = {},
  Loader = React.createClass({
    displayName: "Loader",
    propTypes: {
      loading: PropTypes.bool,
      color: PropTypes.string,
      size: PropTypes.number,
      margin: PropTypes.number
    },
    getDefaultProps: function() {
      return {
        loading: !0,
        color: "#ffffff",
        size: 25,
        margin: 2
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
      var t = this.props.size,
        r = animations[t];
      if (!r) {
        var i = {
          "75%": {
            opacity: .7
          },
          "100%": {
            transform: "translate(" + -4 * t + "px," + -t / 4 + "px)"
          }
        };
        r = animations[t] = insertKeyframesRule(i)
      }
      return {
        animation: [r, "1s", .25 * e + "s", "infinite", "linear"].join(" "),
        animationFillMode: "both"
      }
    },
    getStyle: function(e) {
      if (1 == e) {
        var t = this.props.size + "px solid transparent",
          r = this.props.size + "px solid " + this.props.color;
        return {
          width: 0,
          height: 0,
          borderRight: t,
          borderTop: r,
          borderLeft: r,
          borderBottom: r,
          borderRadius: this.props.size
        }
      }
      return assign(this.getBallStyle(e), this.getAnimationStyle(e), {
        width: 10,
        height: 10,
        transform: "translate(0, " + -this.props.size / 4 + "px)",
        position: "absolute",
        top: 25,
        left: 100
      })
    },
    renderLoader: function(e) {
      if (e) {
        var t = {
          position: "relative",
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
        })))
      }
      return null
    },
    render: function() {
      return this.renderLoader(this.props.loading)
    }
  });
module.exports = Loader;
