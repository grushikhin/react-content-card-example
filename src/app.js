var CardsList = require('./cardsList/index');
var Header    = require('./header/index');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header></Header>
                <div className="content container">
                    <CardsList url={this.props.url}></CardsList>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<App url="http://api.geometria.ru/v1/video?categoryId=4&cityId=4962"/>, document.getElementById('container'));