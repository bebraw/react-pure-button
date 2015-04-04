'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Button',

    propTypes: {
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
        primary: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            disabled: false,
            active: false,
            primary: false,
        };
    },

    render: function() {
        var {className, disabled, active, primary, ...props} = this.props;
        var classes = {
            'pure-button-disabled': disabled,
            'pure-button-active': active,
            'pure-button-primary': primary,
        };

        return (
            <button className={
                classNames('pure-button', className, classes)} {...props}>
                {props.children}</button>
        );
    },
});
