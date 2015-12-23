module.exports = React.createClass({
    printBtnClickHandler: function() {
        console.log("Print card " + this.props.id);
    },

    removeBtnClickHandler: function() {
        console.log("Remove card " + this.props.id);

        if (this.props.removeHandler) {
            this.props.removeHandler(this.props.id);
        }
    },

    render: function() {

        return (
            <div className="cardsBlock-controls">
                <div className="btn-group">
                    <a className="btn cardsBlock-controls-open" href={this.props.url}><span className="glyphicon glyphicon-share-alt"></span></a>
                    <div className="btn cardsBlock-controls-remove" onClick={this.removeBtnClickHandler}><span className="glyphicon glyphicon-trash"></span></div>
                    <div className="btn cardsBlock-controls-open" onClick={this.printBtnClickHandler}><span className="glyphicon glyphicon-print"></span></div>
                </div>
            </div>
        );
    }
});