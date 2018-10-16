import React, { Component } from 'react';
import ListMail from '../../components/list/ListMail';
import { connect } from 'react-redux';
import { getAllMailSent, deleteRestore } from './../../actions/mailer';
import MailItem from '../../components/list-item/MailItem';
import Typography from '@material-ui/core/Typography';

class SentContainer extends Component {
    render() {
        const { listMail } = this.props.mail;
        return (
            <ListMail>
                {this.showMail(listMail)}
            </ListMail>
        );
    }

    deleteRestoreMail = id => {
        this.props.deleteRestore(id)
    }

    showMail = (listMail) => {
        let result = null;
        if (listMail.length > 0) {
            result = listMail.map((item, index) => {
                return <MailItem item={item} key={index} match={this.props.match} history={this.props.history} deleteRestoreMail={this.deleteRestoreMail} />
            })
        } else {
            result = (<Typography variant="h4" gutterBottom align="center">
                        No mail sent
                    </Typography>)
        }
        return result;
    }

    componentDidMount() {
        this.props.getAllMailSent()
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    mail: state.mail
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllMailSent: () => {
            dispatch(getAllMailSent())
        },
        deleteRestore: id => {
            dispatch(deleteRestore(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentContainer);