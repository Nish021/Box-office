import styled from "styled-components";
import { SearchCard } from "../styled";
export const StylesShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }

    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      display: flex;
      justify-content: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
