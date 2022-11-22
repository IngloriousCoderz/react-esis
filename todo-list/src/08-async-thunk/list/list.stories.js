import List from "./list";

export default {
  title: "Todo List/List",
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithTasks = Template.bind({});
WithTasks.args = {
  tasks: [
    { id: 1, text: "Learn React", completed: true },
    {
      id: 2,
      text: "Look for a job",
      completed: false,
    },
    {
      id: 3,
      text: "Forget everything",
    },
  ],
};
