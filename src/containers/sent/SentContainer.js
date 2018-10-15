import React, { Component } from 'react';
import ListMail from '../../components/list/ListMail';
import { connect } from 'react-redux';
import { getAllMailSent } from './../../actions/mailer';
import MailItem from '../../components/list-item/MailItem';

class SentContainer extends Component {
    render() {
        const { listMail } = this.props.mail;
        return (
            <ListMail>
                {this.showMail(listMail)}
            </ListMail>
        );
    }

    showMail = (listMail) => {
        let result = null;
        if (listMail.length > 0) {
            result = listMail.map((item, index) => {
                return <MailItem item={item} key={index} match={this.props.match} />
            })
        }
        return result;
    }

    componentDidMount() {
        this.props.getAllMailInbox()
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    mail: state.mail
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllMailInbox: () => {
            dispatch(getAllMailSent())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentContainer);