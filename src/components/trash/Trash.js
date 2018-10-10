import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    title: {
        id: 'trash.title',
        defaultMessage: 'Trash Component'
    }
})

class Trash extends Component {
    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <div>
                {formatMessage(messages.title)}
            </div>
        );
    }
}

export default injectIntl(Trash);