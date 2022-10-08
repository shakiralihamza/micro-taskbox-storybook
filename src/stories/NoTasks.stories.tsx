import React from 'react';
import NoTasks from "../components/NoTasks";
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    component: NoTasks,
    title: 'NoTasks',
} as ComponentMeta<typeof NoTasks>;

const Template: ComponentStory<typeof NoTasks> = () => <NoTasks />;

export const Default = Template.bind({});
