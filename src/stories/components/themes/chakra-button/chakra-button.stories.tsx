import React from "react";
import { Button, ThemeProvider, CSSReset, theme } from "@chakra-ui/react";
import { ComponentStory } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
  decorators: [
    (story: any) => {
      return (
        <ThemeProvider theme={theme}>
          <CSSReset />
          {story()}
        </ThemeProvider>
      );
    },
  ],
  argTypes: {
    colorScheme: { control: "text" },
    children: { control: "text" },
    onClick: { action: "===> clicked " },
  },
};

const CButtonTemplate: ComponentStory<typeof Button> = (args: any) => {
  return (
    <Button
      {...actions("onBlur", "onMouseOver")}
      colorScheme="blue"
      {...args}
    />
  );
};

export const CButton = CButtonTemplate.bind({});
CButton.args = {
  children: "CButtonOne",
};

export const CButtonTwo = () => {
  return (
    <Button disabled={boolean("Disabled", false)}>
      {text("Label", "Button Label")}
    </Button>
  );
};
