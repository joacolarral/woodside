"use client";

import Image from "next/image";
import React, { useMemo } from "react";

import Carousel from "@/app/components/Carousel";

import img1 from "@/app/images/cabalgata/cabalgata-1.jpg";
import img2 from "@/app/images/cabalgata/cabalgata-2.jpg";
import img3 from "@/app/images/cabalgata/cabalgata-3.jpg";
// import useDeviceType from "@/app/hooks/useDeviceType";
import Container from "@/app/components/Container";

const buildSlides = () => {
  const images = [img1, img2, img3];
  return images.map((image, index) => ({
    id: index + 1,
    value: <Image key={index} fill src={image.src} alt="image" />,
  }));
};

const Cabalgatas = () => {
  // const device = useDeviceType();

  const slides = useMemo(() => buildSlides(), []);

  return (
    <Container id="cabalgatas">
      <Carousel slides={slides} scrollbarStylesAlternative />
    </Container>
  );
};

export default Cabalgatas;
