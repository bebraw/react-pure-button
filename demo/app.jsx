'use strict';

var React = require('react');
var Fork = require('react-ghfork');

var readme = require('../README.md');
var pkgInfo = require('../package.json');

var Button = require('../lib');


module.exports = React.createClass({
    displayName: 'App',

    render() {
        return (
            <div className='pure-g'>
                <Fork className='right' project={pkgInfo.user + '/' + pkgInfo.name} />
                <header className='pure-u-1'>
                    <h1>{pkgInfo.name}</h1>

                    <div className='description'>{pkgInfo.description}</div>
                </header>
                <article className='pure-u-1'>
                    <section className='demonstration'>
                        <h2>Default Button</h2>

                        <div>
                            <Button>Activate</Button>
                        </div>
                    </section>

                    <section className='demonstration'>
                        <h2>Disabled Button</h2>

                        <div>
                            <Button disabled={true}>Activate</Button>
                        </div>
                    </section>

                    <section className='demonstration'>
                        <h2>Active Button</h2>

                        <div>
                            <Button active={true}>Activate</Button>
                        </div>
                    </section>

                    <section className='demonstration'>
                        <h2>Primary Button</h2>

                        <div>
                            <Button primary={true}>OK</Button>
                        </div>
                    </section>

                    <section className='documentation'>
                        <h2>README</h2>

                        <div dangerouslySetInnerHTML={{__html: readme}}></div>
                    </section>
                </article>
            </div>
        );
    },
});
