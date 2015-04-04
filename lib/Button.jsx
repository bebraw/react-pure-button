'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Button',

    propTypes: {
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            disabled: false,
        };
    },

    render: function() {
        var {className, disabled, ...props} = this.props;
        var disabledClass = disabled && 'pure-button-disabled';

        return (
            <button className={
                classNames('pure-button', className, disabledClass)} {...props}>
                {props.children}</button>
        );
    },
});
