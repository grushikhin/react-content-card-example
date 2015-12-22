module.exports = React.createClass({
    render: function() {
        return (
            <div className="cardsBlock">
                <div className="cardsBlock-content">
                    <div className="cardsBlock-title">
                        <span className="glyphicon glyphicon-film"></span>&nbsp;{this.props.title}
                    </div>
                    <p className="cardsBlock-description">
                        {this.props.description1}
                    </p>
                </div>
                <div className="cardsBlock-background" style={ {backgroundImage: 'url(' + this.props.image + ')' }}></div>
                <div className="cardsBlock-overlay"></div>

            </div>
        );
    }
});