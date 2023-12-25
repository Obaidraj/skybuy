"use client";
import ImageMagnify from "react-image-magnify";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProductDetail } from "@/redux/slices/product/productAction";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { FaTruckFast } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import {
  addToWishlist,
  addtoCart,
  removeFromWishlist,
} from "@/redux/slices/common/commonSlice";
import { enqueueSnackbar } from "notistack";
import { FaHeart } from "react-icons/fa";
import Card from "@/components/common/card";
import Lottie from "lottie-react";
import Loading from "@/public/loading.json";
type Props = {};

const page = (props: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [mainImage, setMainImage] = useState("");
  const [items, setItems] = useState<number>(1);
  const { loadingProductdetail, productDetail } = useAppSelector(
    (state) => state.product
  );
  const { wishlist } = useAppSelector((state) => state.common);

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
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (wishlist.includes(productDetail)) {
      dispatch(removeFromWishlist(productDetail));
      enqueueSnackbar("Removed to wishlist", { variant: "success" });
    } else {
      dispatch(addToWishlist(productDetail));
      enqueueSnackbar("Added to wishlist", { variant: "success" });
    }
  };
  const handleChange = (e) => {
    if (e.target.value < 0) return;
    setItems(e.target.value);
  };
  const additemCart = () => {
    if (items < 0) return;
    const newObj = { ...productDetail, quantity: items };
    dispatch(addtoCart(newObj));
    enqueueSnackbar("Added to cart", { variant: "success" });
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
          <div className="md:w-[50%] w-full flex flex-1 flex-col ">
            <div className="flex gap-2 ">
              <div className="flex">
                {" "}
                {productDetail?.rating &&
                  [...Array(Math.floor(productDetail?.rating))].map(
                    (_, index) => (
                      <svg
                        key={index}
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    )
                  )}
                <span className="text-gray-500 px-1">
                  {productDetail?.rating?.toFixed(1)} Review(s)
                </span>{" "}
              </div>{" "}
            </div>
            <div className="text-xl font-bold">{productDetail.title}</div>
            <div className="text-lg">{productDetail.description}</div>
            <hr />
            <div className="flex flex-col my-2 gap-2">
              <div>
                {" "}
                <span className="font-bold">Brand:</span> {productDetail.brand}
              </div>
              <div>
                {" "}
                <span className="font-bold">Category:</span>{" "}
                {productDetail.category}
              </div>
              <div>
                {" "}
                <span className="font-bold">Discount:</span>{" "}
                {productDetail.discountPercentage}%
              </div>
              <div>
                {" "}
                <span className="font-bold">Price:</span> ${productDetail.price}
              </div>
              <div>
                {" "}
                <span className="font-bold">Available In Stock:</span>{" "}
                {productDetail.stock}
              </div>
            </div>
            <div className="flex justify-start flex-row gap-2">
              <div className="w-[10%]">
                <Input
                  placeholder="0"
                  type="number"
                  handleChange={handleChange}
                  value={items}
                />
              </div>
              <div>
                <Button title={"Add to cart"} handleClick={additemCart} />
              </div>
            </div>
            <div className="flex my-2">
              <div
                className="hover:text-primary cursor-pointer flex items-center text-xl"
                onClick={(e) => handleClick(e)}
              >
                {wishlist.includes(productDetail) ? (
                  <>
                    <FaHeart className="text-primary px-2" /> Remove from
                    Wishlist
                  </>
                ) : (
                  <>
                    <CiHeart /> Add to Wishlist
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2 ">
              <Card
                title={"Security policy"}
                icon={<FaLock className="text-3xl" />}
                desc={
                  "Implementing robust encryption protocols and regular security audits to safeguard customer data and ensure a secure online shopping experience."
                }
              />
              <Card
                title={"Delivery policy"}
                icon={<FaTruckFast className="text-3xl" />}
                desc={
                  "Fast and reliable doorstep delivery, ensuring your purchases reach you swiftly and securely."
                }
              />
              <Card
                title={"Return policy"}
                icon={<GiReceiveMoney className="text-3xl" />}
                desc={
                  "Hassle-free returns: Shop with confidence knowing our e-commerce site offers a seamless and customer-friendly return policy"
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;
