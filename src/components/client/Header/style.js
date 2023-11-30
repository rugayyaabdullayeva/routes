import styled from "styled-components";

export const Navbar = styled.nav`
  font-size: 1.2em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: midnightblue;
  color: white;
  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

