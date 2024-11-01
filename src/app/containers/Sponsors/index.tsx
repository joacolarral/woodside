"use client";
import React from "react";

// import useDeviceType from "@/app/hooks/useDeviceType";
import Container from "@/app/components/Container";

// const buildSlides = () => {
//   const images = [img1, img2, img3, img4, img5];
//   return images.map((image, index) => ({
//     id: index + 1,
//     value: <Image key={index} fill src={image.src} alt="image" />,
//   }));
// };

const Sponsors = () => {
  // const device = useDeviceType();

  // const slides = useMemo(() => buildSlides(), []);

  return (
    <Container
      style={{ height: 300, backgroundColor: "lightblue" }}
      id="sponsors"
    >
      ACA VAN LOS SPONSORS
    </Container>
  );
};

export default Sponsors;
