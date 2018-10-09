import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    title: {
        id: 'compose.title',
        defaultMessage: 'Compose Component'
    }
})

class Compose extends Component {
    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <div>
                {formatMessage(messages.title)}
            </div>
        );
    }
}

export default injectIntl(Compose);