var React = require('react');
var ReactDOM = require('react-dom');

var Actions = require('./flux/actions/action.js');
var Store = require('./flux/stores/store.js');

require('../assets/software.css');

var FormField = React.createClass({

    getInitialState: function () {
        return Store.getState();
    },

    componentDidMount: function () {
        Store.listen(this.onChange);
        this.initializeAllActions();
    },

    initializeAllActions: function () {
        Actions.getFilterdata();
    },

    componentWillUnmount: function () {
        Store.unlisten(this.onChange);
    },

    onChange: function (state) {
        this.setState(state);
    },

    handleOnNameChange: function (e) {
        Actions.OnNameChange(e.target.value);
    },

    handleOnNumberChange: function (e) {
        Actions.OnNumberChange(e.target.value);
    },

    handleOnEmailChange: function (e) {
        Actions.OnEmailChange(e.target.value);
    },

    handleOnAddressChange: function (e) {
        Actions.OnAddressChange(e.target.value);
    },

    handleOnCityChange: function (e) {
        Actions.OnCityChange(e.target.value);
    },

    onClickSubmit: function () {
        Actions.Submit();
    },

    onClickReset: function () {
        Actions.onClickReset();
    },

    render: function () {
       return (<div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 linkpath_01">
                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        Name :
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <input type="text" value={this.state.name} onChange={this.handleOnNameChange} 
                                        className="sy_pp_inputsp_de_03" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        Phone Number :
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <input type="text" value={this.state.number} onChange={this.handleOnNumberChange} 
                                        className="sy_pp_inputsp_de_03" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        E-Mail :
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <input type="text" value={this.state.eMail} onChange={this.handleOnEmailChange} 
                                        className="sy_pp_inputsp_de_03" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                         Address :
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <input type="text" value={this.state.address} onChange={this.handleOnAddressChange} 
                                        className="sy_pp_inputsp_de_03" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                        City :
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <input type="text" value={this.state.city} onChange={this.handleOnCityChange} 
                                        className="sy_pp_inputsp_de_03" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12"/>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <span className="child_02_box_bt_01"><button type="button" className="btn sy_bt_001_b_con_01 btn-xs" onClick={this.onClickSubmit}>Submit</button></span> &nbsp; 
                                        <span className="child_02_box_bt_01"><button type="button" className="btn sy_bt_001_b_con_01 btn-xs" onClick={this.onClickReset}>Reset</button></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12" style={{paddingTop:'10px'}}>
                                <div id="tableset_row" className="pop_table_row_c_01">
                                    <div className="col_01">Name</div>
                                    <div className="col_01">Ph Number</div>
                                    <div className="col_01">EMail</div>
                                    <div className="col_03_5" style={{paddingRight: '4em'}}>Address</div>
                                    <div className="col_01">City</div>
                                </div>
                                <Table Data={this.state.infoList}/>
                            </div>
                        </div>
                    </div>
               </div>);
    }
});

var Table = React.createClass({
    render: function () {
        var Rows = [];
        if (this.props.Data !== undefined) {
            this.props.Data.forEach((p, i) => {
                Rows.push(<EachWeeksData data={p} key={i}/>)
            });
        }
        return (<div className="height_scroll_t_c_01" style={{height: this.props.height - 65, outline: '1pt solid #d3d3d3'}}>{Rows}</div>);
    }
});

var EachWeeksData = React.createClass({
    render: function () {
        return (<div id="tableset_w_row" className="pop_table_row_c_03">
                <div className="col_01">{this.props.data.name}</div>
                <div className="col_01">{this.props.data.number}</div>
                <div className="col_01">{this.props.data.eMail}</div>
                <div className="col_03_5">{this.props.data.address}</div>
                <div className="col_01">{this.props.data.city}</div>
            </div>);
        

    }
});

module.exports = FormField;



