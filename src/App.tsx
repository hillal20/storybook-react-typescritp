import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./stories/routes/homes";
import FirstRoute from "./stories/routes/firstRoute";

/* the steps to generate the typescript is 
 npx create-react-app myapp 
 then 
 npx -p @storybook/cli sb init 

*/

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstRoute" element={<FirstRoute />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
