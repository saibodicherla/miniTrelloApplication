import React, { useState } from "react";
import nanoid from "nanoid";

import Styled from "../../styles/Column";

function ColumnForm({
  addNewTab,
  editTab,
  columnId,
  setShow,
  selected,
  setSelected
}) {
  const [title, setTitle] = useState(selected ? selected.title : "");
  const [description, setDescription] = useState(
    selected ? selected.description : ""
  );
  const [image, setImage] = useState(selected ? selected.image : "");
  const [height, setHeight] = useState(48);
  const [errors, setErrors] = useState({});

  function onChangeInput(e) {
    const { value } = e.target;

    if (value.length <= 20) {
      setTitle(value);
    }
  }

  function onChangeTextarea(e) {
    const { value, scrollHeight } = e.target;

    if (scrollHeight > 48) {
      setHeight(scrollHeight);
    } else {
      setHeight(48);
    }

    setDescription(value);
  }

  function onChangeImage(e) {
    const file = e.target.files[0];

    if (file && file.size > 1024000) {
      setErrors({ imageSize: "Image size must be less than 1024kb" });
    } else {
      setErrors({});
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  }

  function validate() {
    const errors = {};

    if (!title) errors.title = "Required";
    if (!description) errors.description = "Required";
    if (!image) errors.image = "Required";

    return errors;
  }

  function onSubmit(e) {
    e.preventDefault();

    const errors = validate();
    const isError = Object.keys(errors).length;

    if (isError) {
      setErrors(errors);
    } else {
      setErrors({});

      if (selected) {
        setSelected(null);
        editTab({ id: selected.id, title, description, image });
      } else {
        setShow(false);
        addNewTab(columnId, { id: nanoid(), title, description, image });
      }
    }
  }

  return (
    <Styled.Form onSubmit={onSubmit}>
      <Styled.FormInput
        error={errors.title}
        value={title}
        onChange={onChangeInput}
        placeholder="Add Title"
      />

      <Styled.FormTextarea
        height={height}
        error={errors.description}
        value={description}
        onChange={onChangeTextarea}
        placeholder="Add Description"
      />

      <Styled.FormImageLabel
        htmlFor="image"
        error={errors.imageSize || errors.image}
      >
        <span>+</span> {selected ? "Edit" : "Add"} image
        {errors.imageSize && <p className="is-error-msg">{errors.imageSize}</p>}
      </Styled.FormImageLabel>

      <Styled.FormImageInput
        id="image"
        onChange={onChangeImage}
        className="card-form-image-input"
        type="file"
      />

      {image && <Styled.FormImage className="card-form-image" src={image} />}

      <Styled.FormSubmit
        type="submit"
        value={`${selected ? "Edit" : "Save"}`}
      />
    </Styled.Form>
  );
}

export default ColumnForm;
