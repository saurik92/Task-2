var alt = require('../alt');

var MockActions = require('../actions/action');
var DataSource = require('../datasource/source');

module.exports = alt.createStore({
    bindListeners: {
        handleOnNameChange: MockActions.OnNameChange,
        handleOnNumberChange: MockActions.OnNumberChange,
        handleOnEmailChange : MockActions.OnEmailChange,
        handleOnAddressChange: MockActions.OnAddressChange,
        handleOnCityChange: MockActions.OnCityChange,

        handleSubmit: MockActions.Submit,

        handleOnClickReset: MockActions.onClickReset,
    },

    state: {
        
    },

    handleOnNameChange (param) {
        this.setState({
            name: param.newName
        });

    },

    handleOnNumberChange (param) {
        this.setState({
            number: param.newValue
        });
    },


    handleOnEmailChange (param) {
        this.setState({
            eMail: param.newValue
        });
    },

    handleOnAddressChange (param) {
        this.setState({
            address: param.newValue
        });
    },    

    handleOnCityChange (param) {
        this.setState({
            city: param.newValue
        })
    },

    handleSubmit: function () {
        var isValid = this.Validate();
        isValid = true;
        if(this.state.infoList !== undefined)
            var InfoList = this.state.infoList.slice();
        else
            var InfoList = [];
        
        if(isValid) {
            var eachInfo = {};

            eachInfo.name = this.state.name;
            eachInfo.number = this.state.number;
            eachInfo.eMail = this.state.eMail;
            eachInfo.address = this.state.address;
            eachInfo.city = this.state.city;

            InfoList.push(eachInfo);

            this.setState({infoList: InfoList});
            this.handleOnClickReset();
        }
    },

    Validate: function () {

    },

    handleOnClickReset: function () {
        this.setState({
            name: '',
            number: '',
            eMail: '',
            address: '',
            city: '',
        });
    },

});