var CardsBlock = require('../cardsBlock/index');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            data: [],
            dataLoaded: false

        };
    },
    componentDidMount: function() {
        var self = this;
        $.ajax({
                url:      this.props.url,
                dataType: 'json',
                cache:    false
            })
            .then(function(responce) {
                self.setState({ data: responce.data.items, dataLoaded: true });
            })
            .fail(function() {
                self.setState({ error: 'Problems with loading data.', dataLoaded: true });
            });
    },
    removeItem: function(id) {
        var card = $.grep(this.state.data, function(e){ return e.id == id; });
        card = card && card[0];

        if (card) {
            var index = this.state.data.indexOf(card);

            this.setState(function(state) {
                state.data.splice(index, 1);
                return state;
            });
        }
    },

    render: function() {
        var self = this;
        var content;
        if (!this.state.dataLoaded) {
            content = <div className="preloader"></div>;
        } else if (this.state.error) {
            content = <div className="alert alert-danger">{this.state.error}</div>;
        } else if (this.state.data.length) {
            content = this.state.data.map(function(item) {
                return (
                    <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        key={item.id}>
                        <CardsBlock
                            title={item.title}
                            description={item.description}
                            image={item.file.item.cover.medium}
                            id={item.id}
                            url={item.url}
                            removeHandler={self.removeItem}
                        />
                    </div>
                );
            });
        } else {
            content = <div className="alert alert-warning">'Oops. List is empty.'</div>;
        }

        return <div className="cardsList row">{content}</div>;

    }
});