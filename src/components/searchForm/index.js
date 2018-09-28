// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import SearchForm from "./form";
import { setSearchTerm } from "./../../actions";
import { submitSearch } from "../../actions";

type Props = {
  term: number,
  setTerm: Function,
  submitSearch: Function
};

class Search extends Component<Props> {
  handleSearch = () => {
    this.props.submitSearch();
  };

  handleTermChange = ({ target }) => {
    const { setTerm } = this.props;
    setTerm(target.value);
  };

  render() {
    const { term } = this.props;
    return (
      <div>
        <SearchForm
          term={term}
          onChangeTerm={this.handleTermChange}
          handleSubmitInfo={this.handleSearch}
          initialValues={{ term: term }}
        />
        <div>{term}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  term: state.search.term
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    setTerm: value => dispatch(setSearchTerm(value)),
    submitSearch: () => dispatch(submitSearch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
