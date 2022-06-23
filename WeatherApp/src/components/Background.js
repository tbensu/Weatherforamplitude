import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

function Background({src}) {
  return <Container>
      <Image src={src}/>
  </Container>;
}

export default Background;
