import React, { Component } from 'react';
import MailContent from '../../components/mail-content/MailContent';
import { connect } from 'react-redux';
import { getMailInfo } from './../../actions/mailer';

class MailContentContainer extends Component {
    render() {
        const { mailContent } = this.props.mail;
        return (
            <MailContent mailContent={mailContent} />
        );
    }
    componentDidMount() {
        const { match } = this.props;
        this.props.getMailInfo(match.params.id);
    }
}

const mapStateToProps = (state) => ({
    mail: state.mail
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getMailInfo: id => {
            dispatch(getMailInfo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailContentContainer);