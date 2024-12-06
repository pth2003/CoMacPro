import { Box, Container } from "@mui/material";
import React from "react";
import { Slide } from "./Slide";
import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Filter } from "./Filter";
export const Banner = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",

        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
      <Filter />
    </Container>
  );
};
