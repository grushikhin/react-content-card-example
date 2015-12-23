var CardsBlockControls = require('../cardsBlockControls/index');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="cardsBlock">
                <div className="cardsBlock-content">
                    <div className="cardsBlock-title">
                        <span className="glyphicon glyphicon-facetime-video"></span>&nbsp;{this.props.title}
                    </div>
                    <div className="cardsBlock-description">
                        {this.props.description}
                    </div>
                </div>
                <div className="cardsBlock-background" style={{backgroundImage: 'url(' + this.props.image + ')' }}></div>
                <div className="cardsBlock-overlay"></div>
                <div className="cardsBlock-tooltip">
                    <CardsBlockControls id={this.props.id} url={this.props.url} removeHandler={this.props.removeHandler}></CardsBlockControls>
                </div>
            </div>
        );
    }
});