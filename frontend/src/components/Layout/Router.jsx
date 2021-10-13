import { memo } from "react";
import { Switch, Route } from "react-router-dom";
import { DashBoard } from "./DashBoard";
import { GridLayout } from "./GridLayout";

export const Router = memo((props) => {
  const { allData } = props;

  return (
    <Switch>
      <Route exact path="/">
        <GridLayout allData={allData} />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard allData={allData} />
      </Route>
    </Switch>
  );
});
