import React, { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./card/Column";
import ColumnModel from "./card/model/ColumnModel";

import Styled from "../styles/Main";

import { AppContext } from "../App";

function Main() {
  const { data, setData } = useContext(AppContext);
  const { columnOrder, columns, tabs } = data;

  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newData = {
        ...data,
        columnOrder: newColumnOrder
      };

      saveTolocalStorage(newData);
      setData(newData);

      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const newTabsId = Array.from(start.tabsId);
      newTabsId.splice(source.index, 1);
      newTabsId.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        tabsId: newTabsId
      };

      const newData = {
        ...data,
        columns: { ...columns, [newColumn.id]: newColumn }
      };

      setData(newData);
      saveTolocalStorage(newData);

      return;
    }

    const startTabsId = Array.from(start.tabsId);
    startTabsId.splice(source.index, 1);
    const newStart = {
      ...start,
      tabsId: startTabsId
    };

    const finishTabsId = Array.from(finish.tabsId);
    finishTabsId.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tabsId: finishTabsId
    };

    const newData = {
      ...data,
      columns: {
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    saveTolocalStorage(newData);
    setData(newData);
  }

  function saveTolocalStorage(data) {
    window.localStorage.setItem("pm_mt", JSON.stringify(data));
  }

  function renderColumns() {
    return columnOrder.map((columnId, index) => {
      const column = columns[columnId];
      const tabsColumn = column.tabsId
        .map(tabId => tabs[tabId])
        .filter(tabId => tabId);

      return (
        <Column
          key={columnId}
          index={index}
          column={column}
          tabs={tabsColumn}
        />
      );
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {provided => (
          <Styled.MainContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <ColumnModel>{renderColumns()}</ColumnModel>
            {provided.placeholder}
          </Styled.MainContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Main;
