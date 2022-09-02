import React from "react";
import { Button } from "../button/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Center from "../CenterComponents/Center";
export default {
  title: "StoryInsideStory/Wrappers",
  decorators:[(story)=> <Center>{story()}</Center>],
  args: {
    border: "10px solid  blue",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  console.log(" args ---> ", args);
  const { border } = args;
  return (
    // <Center>
      <div style={{ border }}>
        <h1>Hello word </h1>
        <Button onClick={() => alert("hello word ")} {...args} />
      </div>
    // </Center>
  );
};

export const WrapperOne = Template.bind({});
WrapperOne.args = {
  label: "insideButton",
  backgroundColor: "lightGreen",
};
