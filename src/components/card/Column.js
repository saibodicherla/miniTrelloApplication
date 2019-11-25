import React, { useState, useEffect, useRef } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import ColumnForm from "./ColumnForm";
import ColumnTab from "./ColumnTab";

import Styled from "../../styles/Column";

function Column({ column, tabs, index, addNewTab, editTab }) {
  const formRef = useRef(null);
  const editFormRef = useRef(null);
  const [selected, setSelected] = useState(false);
  const [show, setShow] = useState(false);

  useOnClickOutside(formRef, () => setShow(false));
  useOnClickOutside(editFormRef, () => setSelected(null));

  function renderTabs() {
    return tabs.map((tab, index) => {
      const { id } = tab;

      if (selected && selected.id === id) {
        return (
          <div key={id} ref={editFormRef}>
            <ColumnForm
              addNewTab={addNewTab}
              editTab={editTab}
              columnId={column.id}
              setShow={setShow}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        );
      }

      return (
        <ColumnTab
          key={id}
          tab={tab}
          index={index}
          onClick={() => setSelected(tab)}
        />
      );
    });
  }

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Styled.Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          index={index}
        >
          <Styled.H1 {...provided.dragHandleProps}>{column.title}</Styled.H1>

          <Droppable droppableId={column.id}>
            {provided => (
              <Styled.Tabs ref={provided.innerRef} {...provided.droppableProps}>
                {renderTabs()}

                {provided.placeholder}
              </Styled.Tabs>
            )}
          </Droppable>

          {show && (
            <div ref={formRef}>
              <ColumnForm
                addNewTab={addNewTab}
                columnId={column.id}
                setShow={setShow}
              />
            </div>
          )}

          <Styled.Add onClick={() => setShow(true)}>
            <span>+</span>
            <span>Add another tab</span>
          </Styled.Add>
        </Styled.Container>
      )}
    </Draggable>
  );
}

function useOnClickOutside(ref, setShow) {
  useEffect(() => {
    function onMouseDown(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      setShow();
    }

    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [ref, setShow]);
}

export default Column;
