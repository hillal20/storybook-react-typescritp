import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/stories/components/CenterComponents/Center";
import { Button, ThemeProvider, CSSReset, theme } from "@chakra-ui/react";
import { withKnobs } from "@storybook/addon-knobs";
// this to center the entire storybook from the root
addDecorator((story) => (
  <Center>
    <ThemeProvider theme={theme}>
      <CSSReset />
      {story()}
    </ThemeProvider>
  </Center>
));
addDecorator(withKnobs());

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  options: {
    // to sort the stories alphabetically
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
