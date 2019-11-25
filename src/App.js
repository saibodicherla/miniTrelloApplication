import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/Main";

import "./styles/base.css";

export const AppContext = React.createContext();

const initialData = {
  tabs: {},
  columns: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      tabsId: []
    },
    todo: {
      id: "todo",
      title: "ToDo",
      tabsId: []
    },
    inProgress: {
      id: "inProgress",
      title: "InProgress",
      tabsId: []
    },
    done: {
      id: "done",
      title: "Done",
      tabsId: []
    }
  },
  columnOrder: ["backlog", "todo", "inProgress", "done"]
};

function App() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const data = window.localStorage.getItem("pm_mt");

    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  return (
    <AppContext.Provider value={{ data, setData }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </AppContext.Provider>
  );
}

export default App;
