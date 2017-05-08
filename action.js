var alt = require('../alt');

class actions {

    OnNameChange (newName) {
        return {newName}
    }

    OnNumberChange (newValue) {
        return {newValue}
    }

    OnEmailChange (newValue) {
        return {newValue}
    }

    OnAddressChange (newValue) {
        return {newValue}
    }

    OnCityChange (newValue) {
        return {newValue}
    }

    onClickReset () {
        return {}
    }

    Submit () {
        return {}
    }

}

module.exports = alt.createActions(actions);