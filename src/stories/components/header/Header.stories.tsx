import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./Header";
import StoryBookRoute from "../../routes/storybookRoute";
import Home from "../../routes/homes";

export default {
  title: "Example/Header",
  component: Header,
  decorators: [
    withRouter,
    // (story) => (
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={story()}>
    //         <Route path="/one" element={<StoryBookRoute />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // ),
  ],
  parameters: {
    layout: "fullscreen",
    reactRouter: {
      routePath: "/settings/*",
      browserPath: "/settings/user",
      routeParams: { userId: "42" },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  //<Header {...args} />
  <Routes>
    <Route path={"/user"} element={<Header {...args} />}>
      <Route path={"/user/home"} element={<Home />} />
    </Route>
    <Route path={"/user/one"} element={<StoryBookRoute />} />
  </Routes>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
