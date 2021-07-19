import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import "./App.css";
import LoadingContainer from "./LoadingContainer";
import MyComponent from './MyComponent';

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;
const App = () => {
  return (
    <DrizzleProvider drizzle={drizzle}>
        <LoadingContainer>
            <MyComponent/>
        </LoadingContainer>
    </DrizzleProvider>
  );
}

export default App;
