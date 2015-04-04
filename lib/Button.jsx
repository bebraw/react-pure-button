'use strict';
var classNames = require('classnames');
var React = require('react');


module.exports = React.createClass({
    displayName: 'Button',

    propTypes: {
        className: React.PropTypes.string,
    },

    getDefaultProps() {
        return {};
    },

    render: function() {
        var {className, ...props} = this.props;

        return (
            <button className={
                classNames('pure-button', className)} {...props}>{props.children}</button>
        );
    },
});
