'use strict';
var React = require('react'),
  assign = require('domkit/appendVendorPrefix'),
  insertKeyframesRule = require('domkit/insertKeyframesRule'),
  keyframes = {
    '50%': {
      opacity: .3
    },
    '100%': {
      opacity: 1
    }
  },
  animationName = insertKeyframesRule(keyframes),
  Loader = React.createClass({
    displayName: 'Loader',
    propTypes: {
      loading: PropTypes.bool,
      color: PropTypes.string,
      height: PropTypes.string,
      width: PropTypes.string,
      margin: PropTypes.string,
      radius: PropTypes.string
    },
    getDefaultProps() {
      return {
        loading: !0,
        color: '#ffffff',
        height: '15px',
        width: '5px',
        margin: '2px',
        radius: '2px'
      };
    },
    getLineStyle(e) {
      return {
        backgroundColor: this.props.color,
        height: this.props.height,
        width: this.props.width,
        margin: this.props.margin,
        borderRadius: this.props.radius,
        verticalAlign: this.props.verticalAlign
      };
    },
    getAnimationStyle(e) {
      return {
        animation: [ animationName, '1.2s', `${.12 * e}s`, 'infinite', 'ease-in-out' ].join(' '),
        animationFillMode: 'both'
      };
    },
    getPosStyle(e) {
      var t = 10 + '20' / 5.5;
      return {
        l1: {
          top: '20',
          left: 0
        },
        l2: {
          top: t,
          left: t,
          transform: 'rotate(-45deg)'
        },
        l3: {
          top: 0,
          left: '20',
          transform: 'rotate(90deg)'
        },
        l4: {
          top: -t,
          left: t,
          transform: 'rotate(45deg)'
        },
        l5: {
          top: -20,
          left: 0
        },
        l6: {
          top: -t,
          left: -t,
          transform: 'rotate(-45deg)'
        },
        l7: {
          top: 0,
          left: -20,
          transform: 'rotate(90deg)'
        },
        l8: {
          top: t,
          left: -t,
          transform: 'rotate(45deg)'
        }
      }[`l${  e}`];
    },
    getStyle(e) {
      return assign(this.getLineStyle(e), this.getPosStyle(e), this.getAnimationStyle(e), {
        position: 'absolute'
      });
    },
    renderLoader(e) {
      if (e) {
        var t = {
          position: 'relative',
          fontSize: 0
        };
        return React.createElement('div', {
          id: this.props.id,
          className: this.props.className
        }, React.createElement('div', {
          style: t
        }, React.createElement('div', {
          style: this.getStyle(1)
        }), React.createElement('div', {
          style: this.getStyle(2)
        }), React.createElement('div', {
          style: this.getStyle(3)
        }), React.createElement('div', {
          style: this.getStyle(4)
        }), React.createElement('div', {
          style: this.getStyle(5)
        }), React.createElement('div', {
          style: this.getStyle(6)
        }), React.createElement('div', {
          style: this.getStyle(7)
        }), React.createElement('div', {
          style: this.getStyle(8)
        })));
      }
      return null;
    },
    render() {
      return this.renderLoader(this.props.loading);
    }
  });

module.exports = Loader;
