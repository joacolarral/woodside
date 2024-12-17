"use client";

import React, { useMemo } from "react";

import Carousel from "@/app/components/Carousel";

import img_horizontal_1 from "@/app/images/surftrip/horizontal/surftrip_horizontal_1.jpg";
import img_horizontal_2 from "@/app/images/surftrip/horizontal/surftrip_horizontal_2.jpg";
import img_horizontal_3 from "@/app/images/surftrip/horizontal/surftrip_horizontal_3.jpg";
import img_vertical_1 from "@/app/images/surftrip/vertical/surftrip_vertical_1.png";
import img_vertical_2 from "@/app/images/surftrip/vertical/surftrip_vertical_2.jpeg";
import img_vertical_3 from "@/app/images/surftrip/vertical/surftrip_vertical_3.jpeg";
import img_vertical_4 from "@/app/images/surftrip/vertical/surftrip_vertical_4.jpg";
import Container from "@/app/components/Container";
import useDeviceType from "@/app/hooks/useDeviceType";
import useBuildSlides from "@/app/hooks/useBuildSlides";

const imagesHorizontal = [img_horizontal_1, img_horizontal_2, img_horizontal_3];
const imagesVertical = [
  img_vertical_1,
  img_vertical_2,
  img_vertical_3,
  img_vertical_4,
];

const Surftrip = () => {
  const device = useDeviceType();
  const imagesToMap = useMemo(
    () => (device && device === "mobile" ? imagesVertical : imagesHorizontal),
    [device]
  );

  const slides = useBuildSlides(device, imagesToMap);

  return (
    <Container id="surftrip">
      <Carousel slides={slides} scrollbarStylesAlternative />
    </Container>
  );
};

export default Surftrip;
