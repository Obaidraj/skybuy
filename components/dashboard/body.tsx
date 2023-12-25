import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAllProducts } from "@/redux/slices/product/productAction";
import LoadCard from "../common/LoadingCard";
import { useWindowSize } from "usehooks-ts";

type Props = {};

const Body = (props: Props) => {
  const { width } = useWindowSize();

  const { products, loadingProduct, hasMoreProduct } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.table(products);
    dispatch(getAllProducts("0"));
  }, []);

  const fetchData = () => {
  
    console.log(products.length);
    dispatch(getAllProducts(products.length));
    
   


  };
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={hasMoreProduct}
      loader={
        <div className=" flex justify-center">
       {  !hasMoreProduct&& <LoadCard />}
        </div>
      }
      height={width>400?"58dvh":"70dvh"}
      className="grid grid-cols-1 xs:grid-col-1 justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 h-full "

    
    >
      <>
        {loadingProduct ? (
          <>
            {[...Array(15)].map((_, index) => (
              <div key={index} className=" flex justify-center">
                <LoadCard key={index} />
              </div>
            ))}
          </>
        ) : (
          <>
            {products &&
              products.map((data, index) => (
                <div key={index} className=" flex justify-center">
                  {" "}
                  <ProductCard data={data}/>
                </div>
              ))}
          </>
        )}
      </>
    </InfiniteScroll>
  );
};

export default Body;
