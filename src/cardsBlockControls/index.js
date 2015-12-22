module.exports = React.createClass({
    editBtnClickHandler: function() {
        console.log("Edit card " + this.props.id);
    },

    printBtnClickHandler: function() {
        console.log("Print card " + this.props.id);
    },

    deleteBtnClickHandler: function() {
        console.log("Delete card " + this.props.id);
    },

    render: function() {

        return (
            <div className="cardsBlock-controls">
                <div className="btn-group">
                    <div className="btn cardsBlock-controls-edit"   onClick={this.editBtnClickHandler}><span className="glyphicon glyphicon-edit"></span></div>
                    <div className="btn cardsBlock-controls-remove" onClick={this.deleteBtnClickHandler}><span className="glyphicon glyphicon-trash"></span></div>
                    <div className="btn cardsBlock-controls-open"   onClick={this.printBtnClickHandler}><span className="glyphicon glyphicon-print"></span></div>
                </div>
            </div>
        );
    }
});