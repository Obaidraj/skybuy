"use client";
import ImageMagnify from "react-image-magnify";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProductDetail } from "@/redux/slices/product/productAction";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";
import Loading from "@/public/loading.json";
import Body from "@/components/detail/body";
type Props = {};

const page = (props: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [mainImage, setMainImage] = useState("");
  const { loadingProductdetail, productDetail } = useAppSelector(
    (state) => state.product
  );
  const { wishlist,cartItems } = useAppSelector((state) => state.common);

  useEffect(() => {
    const slug: string = id[0];
    dispatch(getProductDetail(slug));
  }, []);
  useEffect(() => {
    if (productDetail) {
      setMainImage(productDetail.thumbnail);
    }
  }, [productDetail]);
  const ChangeMianImage = (image: string) => {
    setMainImage(image);
  };



  return (
    <div className="flex md:flex-row flex-col justify-between gap-2 p-1 h-full w-full">
      {loadingProductdetail ? (
        <Lottie animationData={Loading} loop={true} className="h-[45%]" />
      ) : (
        <>
          <div className="flex flex-col gap-3 h-full md:w-[27dvw] w-[95dvw] ">
            <ImageMagnify
              {...{
                smallImage: {
                  alt: "Your Image",
                  isFluidWidth: true,
                  src: mainImage,
                },
                largeImage: {
                  src: mainImage,
                  width: 550,
                  height: 1800,
                },
              }}
            />

            <div className="grid grid-cols-4 gap-1 h-[28dvh] overflow-y-auto">
              {productDetail?.images?.map((image) => (
                <div
                  key={image}
                  className=" border hover:border-primary h-full cursor-pointer"
                  onClick={() => ChangeMianImage(image)}
                >
                  <Image
                    src={image}
                    alt="thumbnail"
                    height={700}
                    width={400}
                    className="h-full w-full object-fit"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* detail section  */}
        <Body />
        </>
      )}
    </div>
  );
};

export default page;
