"use client";

import React from "react";
import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import styles from "./FirstPage.module.scss";
import Navbar from "@/app/components/Navbar";
import Trip from "@/app/images/ws_trip.mp4";

export default function FirstPage() {
  return (
    <Container id="home" className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Logo />
      </div>
      <video
        className={styles.video}
        src={Trip}
        autoPlay
        loop
        playsInline
        muted
        onClick={(e) => (e.target as HTMLVideoElement).play()}
        onTouchStart={(e) => (e.target as HTMLVideoElement).play()}
      />
    </Container>
  );
}
