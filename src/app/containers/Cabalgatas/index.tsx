"use client";

import React, { useMemo } from "react";

import Carousel from "@/app/components/Carousel";

import img_horizontal_1 from "@/app/images/cabalgata/horizontal/cabalgata_horizontal_1.jpg";
import img_horizontal_2 from "@/app/images/cabalgata/horizontal/cabalgata_horizontal_2.jpg";
import img_horizontal_3 from "@/app/images/cabalgata/horizontal/cabalgata_horizontal_3.jpg";
import img_horizontal_4 from "@/app/images/cabalgata/horizontal/cabalgata_horizontal_4.jpg";
import img_vertical_1 from "@/app/images/cabalgata/vertical/cabalgata_vertical_1.jpg";
import img_vertical_2 from "@/app/images/cabalgata/vertical/cabalgata_vertical_2.jpg";
import img_vertical_3 from "@/app/images/cabalgata/vertical/cabalgata_vertical_3.jpg";
import img_vertical_4 from "@/app/images/cabalgata/vertical/cabalgata_vertical_4.jpg";
import img_vertical_5 from "@/app/images/cabalgata/vertical/cabalgata_vertical_5.jpg";
import useDeviceType from "@/app/hooks/useDeviceType";
import Container from "@/app/components/Container";
import useBuildSlides from "@/app/hooks/useBuildSlides";

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

const Cabalgatas = () => {
  const device = useDeviceType();
  const imagesToMap = useMemo(
    () => (device && device === "mobile" ? imagesVertical : imagesHorizontal),
    [device]
  );
  const slides = useBuildSlides(device, imagesToMap);

  return (
    <Container id="cabalgatas">
      <Carousel slides={slides} scrollbarStylesAlternative />
    </Container>
  );
};

export default Cabalgatas;
