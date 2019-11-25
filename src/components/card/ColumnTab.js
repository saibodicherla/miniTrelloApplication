import React from "react";
import { Draggable } from "react-beautiful-dnd";

import Styled from "../../styles/Column";

function ColumnTab({ tab, onClick, index }) {
  return (
    <Draggable draggableId={tab.id} index={index}>
      {provided => (
        <Styled.Tab
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onClick={onClick}
        >
          <p>{tab.title}</p>
        </Styled.Tab>
      )}
    </Draggable>
  );
}

export default ColumnTab;
