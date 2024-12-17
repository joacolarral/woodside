"use client";

import React, { useMemo } from "react";

import Carousel from "@/app/components/Carousel";

import img_horizontal_1 from "@/app/images/habitaciones/horizontal/habitaciones_horizontal_1.jpg";
import img_horizontal_2 from "@/app/images/habitaciones/horizontal/habitaciones_horizontal_2.jpg";
import img_horizontal_3 from "@/app/images/habitaciones/horizontal/habitaciones_horizontal_3.jpg";
import img_horizontal_4 from "@/app/images/habitaciones/horizontal/habitaciones_horizontal_4.jpg";
import img_vertical_1 from "@/app/images/habitaciones/vertical/habitaciones_vertical_1.png";
import img_vertical_2 from "@/app/images/habitaciones/vertical/habitaciones_vertical_2.png";
import img_vertical_3 from "@/app/images/habitaciones/vertical/habitaciones_vertical_3.jpg";
import img_vertical_4 from "@/app/images/habitaciones/vertical/habitaciones_vertical_4.png";
import img_vertical_5 from "@/app/images/habitaciones/vertical/habitaciones_vertical_5.jpg";
import useDeviceType from "@/app/hooks/useDeviceType";
import useBuildSlides from "@/app/hooks/useBuildSlides";
import Container from "@/app/components/Container";

const imagesHorizontal = [
  img_horizontal_1,
  img_horizontal_2,
  img_horizontal_3,
  img_horizontal_4,
];
const imagesVertical = [
  img_vertical_1,
  img_vertical_2,
  img_vertical_3,
  img_vertical_4,
  img_vertical_5,
];

const Habitaciones = () => {
  const device = useDeviceType();
  const imagesToMap = useMemo(
    () => (device && device === "mobile" ? imagesVertical : imagesHorizontal),
    [device]
  );

  const slides = useBuildSlides(device, imagesToMap);

  return (
    <Container id="habitaciones">
      <Carousel slides={slides} scrollbarStylesAlternative />
    </Container>
  );
};

export default Habitaciones;
