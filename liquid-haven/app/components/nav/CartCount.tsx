"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl text-white">
        <MdOutlineShoppingCart/>
      </div>
      <span
        className="absolute
      top-[-10px]
      right-[-10px]
      bg-white
      text-black
      h-6
      w-6
      rounded-full
      flex
      items-center
      justify-center
      text-sm
      "
      >
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
