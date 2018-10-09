import React from 'react';
import { shallow } from 'enzyme';
import Inbox from './Inbox';
import InboxControl from './../inbox-control/InboxControl';
import InboxItem from './../inbox-item/InboxItem';

describe('<Inbox />', () => {
    it('render', () => {
        shallow(<Inbox />)
    })

    it('renders three <InboxControl /> components', () => {
        const wrapper = shallow(<Inbox />);
        expect(wrapper.find(InboxControl)).toHaveLength(1);
    });

    it('renders three <InboxItem /> components', () => {
        const wrapper = shallow(<Inbox />);
        expect(wrapper.find(InboxItem)).toHaveLength(6);
    });
})