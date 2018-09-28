import React, { Component } from "react";
import SearchComponent from "./searchForm";
import styled from "styled-components";

const StyledApp = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
        <SearchComponent />
      </StyledApp>
    );
  }
}
