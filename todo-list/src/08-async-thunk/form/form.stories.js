import Form from "./form";

export default {
  title: "Todo List/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (event) => {
    event.preventDefault();
  },
};
