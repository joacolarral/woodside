"use client";

import Image from "next/image";
import React, { useMemo } from "react";

import Carousel from "@/app/components/Carousel";

import img1 from "@/app/images/habitaciones/habitaciones-1.jpg";
import img2 from "@/app/images/habitaciones/habitaciones-2.jpg";
// import img3 from "@/app/images/trip/trip_3.jpg";
// import img4 from "@/app/images/trip/trip_4.jpg";
// import img5 from "@/app/images/trip/trip_5.jpg";
// import useDeviceType from "@/app/hooks/useDeviceType";
import Container from "@/app/components/Container";

const buildSlides = () => {
  const images = [img1, img2];
  return images.map((image, index) => ({
    id: index + 1,
    value: <Image key={index} fill src={image.src} alt="image" />,
  }));
};

const Habitaciones = () => {
  // const device = useDeviceType();

  const slides = useMemo(() => buildSlides(), []);

  return (
    <Container id="habitaciones">
      <Carousel slides={slides} scrollbarStylesAlternative />
    </Container>
  );
};

export default Habitaciones;
