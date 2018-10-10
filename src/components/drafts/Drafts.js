import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    title: {
        id: 'drafts.title',
        defaultMessage: 'This is Drafts Component'
    }
})

class Drafts extends Component {
    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <div>
                {formatMessage(messages.title)}
            </div>
        );
    }
}

export default injectIntl(Drafts);