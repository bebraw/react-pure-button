'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Button',

    propTypes: {
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            disabled: false,
            active: false,
        };
    },

    render: function() {
        var {className, disabled, active, ...props} = this.props;
        var disabledClass = disabled && 'pure-button-disabled';
        var activeClass = active && 'pure-button-active';

        return (
            <button className={
                classNames('pure-button', className, disabledClass, activeClass)} {...props}>
                {props.children}</button>
        );
    },
});
