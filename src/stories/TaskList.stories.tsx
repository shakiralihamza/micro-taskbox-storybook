import React from 'react';

import TaskList from "../components/TaskList";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import * as TaskStories from './Task.stories';

export default {
    component: TaskList,
    title: 'TaskList',
    // @ts-ignore

    decorators: [story => <div style={{padding: '3rem'}}>{story()}</div>],
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.js.
    tasks: [
        {...TaskStories.Default.args, id: '1', title: 'Task 1'},
        {...TaskStories.Default.args, id: '2', title: 'Task 2'},
        {...TaskStories.Default.args, id: '3', title: 'Task 3'},
        {...TaskStories.Default.args, id: '4', title: 'Task 4'},
        {...TaskStories.Default.args, id: '5', title: 'Task 5'},
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
// @ts-ignore
        ...Default.args.tasks.slice(0, 5),
        {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false,
};
