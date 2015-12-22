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
    render: function() {
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
                        />
                    </div>
                );
            });
        } else {
            content = <div className="alert alert-warning">'Ops. List is empty.'</div>;
        }

        return <div className="cardsList row">{content}</div>;

    }
});