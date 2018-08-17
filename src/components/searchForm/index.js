import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchForm from './form'
import { setSearchTerm } from './../../actions'
class Search extends Component {
  handleSearch = e => {
    console.log(e)
  }

  handleTermChange = ({ target }) => {
    const { setTerm } = this.props
    setTerm(target.value)
  }

  render() {
    const { term } = this.props
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
    )
  }
}

const mapStateToProps = state => ({
  term: state.search.term
})

const mapDispatchToProps = dispatch => ({
  setTerm: value => dispatch(setSearchTerm(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
