import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    title: {
        id: 'spam.title',
        defaultMessage: 'Spam Component'
    }
})

class Spam extends Component {
    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <div>
                {formatMessage(messages.title)}
            </div>
        );
    }
}

export default injectIntl(Spam);