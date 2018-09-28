// @flow

import React from "react";
import { Field, reduxForm } from "redux-form";
import MyField from "./Field";
import { Button } from "@material-ui/core";

type Props = {
  placeholders: ?string
};

let SearchForm = (props: Props) => {
  const {
    handleSubmit,
    placeholders,
    onSubmit,
    handleSubmitInfo,
    onChangeTerm
  } = props;

  return (
    <form onSubmit={handleSubmit(e => handleSubmitInfo(e))}>
      <Field
        component={"input"}
        name="searchTerm"
        placeholder={placeholders.searchTerm}
        label="Search"
        onChange={e => onChangeTerm(e)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchForm = reduxForm({
  form: "search",
  placeholders: {
    searchTerm: "Search Art here"
  }
})(SearchForm);

export default SearchForm;
