import React, { useContext } from "react";

import { AppContext } from "../../../App";

function ColumnModel({ children }) {
  const { data, setData } = useContext(AppContext);

  function addNewTab(columnId, newTab) {
    const tabs = JSON.parse(JSON.stringify(data.tabs));
    const columns = JSON.parse(JSON.stringify(data.columns));

    tabs[newTab.id] = newTab;
    columns[columnId].tabsId.push(newTab.id);

    const newData = { ...data, tabs, columns };

    setData(newData);
    saveToLocalStorage(newData);
  }

  function editTab(newTab) {
    const tabs = JSON.parse(JSON.stringify(data.tabs));

    tabs[newTab.id] = newTab;

    const newData = { ...data, tabs };

    setData(newData);
    saveToLocalStorage(newData);
  }

  function saveToLocalStorage(data) {
    window.localStorage.setItem("pm_mt", JSON.stringify(data));
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { addNewTab, editTab })
  );

  return <>{childrenWithProps}</>;
}

export default ColumnModel;
