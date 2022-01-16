import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/MovieSlice";

// import db from "../firebase";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        // console.log(doc);
        return { id: doc.id, ...doc.data() };
      });

      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  ::before {
    background: url("/images/home-background.png");
    background-position: center;
    background-size: cover;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
