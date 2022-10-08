import React from 'react';
import LoadingTasks from "../components/LoadingTasks";
import {ComponentStory, ComponentMeta} from '@storybook/react';


export default {
    component: LoadingTasks,
    title: 'LoadingTasks',
} as ComponentMeta<typeof LoadingTasks>;

const Template: ComponentStory<typeof LoadingTasks> = () => <LoadingTasks />;

export const Default = Template.bind({});
