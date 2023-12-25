import React, { ReactNode } from "react";
import { RxCrossCircled } from "react-icons/rx";

interface DrawerProps {
  children: ReactNode;
  title:string
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen,title }) => {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? "transition-opacity opacity-100 duration-500 translate-x-0 "
          : "transition-all delay-500 opacity-0 -translate-x-full ")
      }
    >
      <section
        className={
          "w-screen max-w-lg left-0 absolute bg-white rounded-tr-2xl rounded-br-2xl h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-screen max-w-lg pb-5 flex flex-col space-y-6 border- h-full ">
         <header className="flex justify-between items-center py-2 px-1">
          <div className="text-2xl">Categories</div>
          <div><RxCrossCircled className="text-2xl" onClick={()=>setIsOpen(false)}/></div>
        
          </header> 
       <main className="overflow-y-auto">
          {children}
          </main>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
