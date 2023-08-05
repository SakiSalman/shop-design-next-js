"use client"
import React, { useEffect, useState } from 'react'
import Carousel from "react-spring-3d-carousel";
import { config } from "@react-spring/web";

type Props = {
  cards?: any
  height?: any
  width?: any
  margin?: any
  offset?: any
  showArrows?: any
  goToSlide?: any
  setGoToSlide: (i: any) => void
}

const BannarSlider = (props: Props) => {
  const table = props.cards?.map((element: any, index: any) => {
    return { ...element, onClick: () => props.setGoToSlide(index) };
  });
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [cards] = useState(table);
  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);
  const offsetFn = (offsetFromCenter: number, index: number) => {
    const scale = offsetFromCenter === 0 ? 1 : 0.8;
    const opacity = offsetFromCenter === 0 ? 1 : 1;
    const translateX =
      offsetFromCenter === 0 ? -50 : offsetFromCenter === -1 ? -25 : -75;
    const translateY = -50;
    return {
      transform: `translateY(${translateY}%) translateX(${translateX}%) scale(${scale})`,
      opacity,
    };
  };
  
  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={props.goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        offsetFn={offsetFn}
      />
    </div>)
}

export default BannarSlider