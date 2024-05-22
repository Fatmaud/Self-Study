import styled from "styled-components";

//! Home componentinden props u alirken destructure ettik, o yüzden süslü icinde direkt props un adini yazdik. Destr. yapmasaydik o zmn {(props.primary)} seklinde yazacaktik

const ButtonS = styled.button`
  width: 25%;
  padding: 1rem;

  color: ${({ primary }) => (primary ? "brown" : "fuchsia")};

  background-color: ${({ primary, secondary }) =>
    primary ? "aqua" : secondary ? "yellow" : "yellowgreen"};

  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 2rem;
  &:hover {
    background-color: cadetblue;
    transform: scale(0.85);
  }
`;

export const TomatoButton = styled(ButtonS)`
  color: ${({ what }) => (what ? "blueviolet" : "brown")};

  background-color: tomato;
  border: 5px solid brown;
  border-radius: 50%;
`;

export default ButtonS;
