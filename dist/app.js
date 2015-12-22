(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CardsList = require('./cardsList/index');
var Header    = require('./header/index');

var App = React.createClass({displayName: "App",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(Header, {url: "https://github.com/grushikhin/react-content-card-example/tree/gh-pages"}), 
                React.createElement("div", {className: "content container"}, 
                    React.createElement(CardsList, {url: this.props.url})
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(App, {url: "http://api.geometria.ru/v1/video?categoryId=4&cityId=4962"}), document.getElementById('container'));

},{"./cardsList/index":4,"./header/index":5}],2:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",
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
            React.createElement("div", {className: "cardsBlock-controls"}, 
                React.createElement("div", {className: "btn-group"}, 
                    React.createElement("div", {className: "btn cardsBlock-controls-edit", onClick: this.editBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-edit"})), 
                    React.createElement("div", {className: "btn cardsBlock-controls-remove", onClick: this.deleteBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), 
                    React.createElement("div", {className: "btn cardsBlock-controls-open", onClick: this.printBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-print"}))
                )
            )
        );
    }
});

},{}],3:[function(require,module,exports){
var CardsBlockControls = require('../cardsBlockControls/index');

module.exports = React.createClass({displayName: "exports",
    render: function() {
        return (
            React.createElement("div", {className: "cardsBlock"}, 
                React.createElement("div", {className: "cardsBlock-content"}, 
                    React.createElement("div", {className: "cardsBlock-title"}, 
                        React.createElement("span", {className: "glyphicon glyphicon-facetime-video"}), " ", this.props.title
                    ), 
                    React.createElement("div", {className: "cardsBlock-description"}, 
                        this.props.description
                    )
                ), 
                React.createElement("div", {className: "cardsBlock-background", style: {backgroundImage: 'url(' + this.props.image + ')'}}), 
                React.createElement("div", {className: "cardsBlock-overlay"}), 
                React.createElement("div", {className: "cardsBlock-tooltip"}, 
                    React.createElement(CardsBlockControls, {id: this.props.id})
                )
            )
        );
    }
});

},{"../cardsBlockControls/index":2}],4:[function(require,module,exports){
var CardsBlock = require('../cardsBlock/index');

module.exports = React.createClass({displayName: "exports",
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
            content = React.createElement("div", {className: "preloader"});
        } else if (this.state.error) {
            content = React.createElement("div", {className: "alert alert-danger"}, this.state.error);
        } else if (this.state.data.length) {
            content = this.state.data.map(function(item) {
                return (
                    React.createElement("div", {className: "col col-lg-3 col-md-4 col-sm-6 col-xs-12", 
                        key: item.id}, 
                        React.createElement(CardsBlock, {
                            title: item.title, 
                            description: item.description, 
                            image: item.file.item.cover.medium, 
                            id: item.id}
                        )
                    )
                );
            });
        } else {
            content = React.createElement("div", {className: "alert alert-warning"}, "'Ops. List is empty.'");
        }

        return React.createElement("div", {className: "cardsList row"}, content);

    }
});

},{"../cardsBlock/index":3}],5:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",
    render: function() {
        return React.createElement("div", {className: "header"}, 
            React.createElement("div", {className: "container"}, 
                React.createElement("div", {className: "header-title"}, 
                    "React content cards example"
                ), 
                React.createElement("div", {className: "header-link"}, 
                    React.createElement("a", {href: this.props.url}, "View on github")
                )
            )
        )
    }
});

},{}]},{},[1]);
