module.exports = React.createClass({
    render: function() {
        return <div className="header">
            <div className="container">
                <div className="header-title">
                    React content cards example
                </div>
                <div className="header-link">
                    <a href={this.props.url}>View on github</a>
                </div>
            </div>
        </div>
    }
});