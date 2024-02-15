import CardCheckout from "@/components/screen/Checkout/CardCheckout";

export const metadata = {
  title: "NIRVOYA - Check Out Page",
  description: "Generated by Nur IT Software LTD.",
};
const CheckOutPage = () => {
  return (
    <section className="pt-11 pb-13  bg-backgroundPage">
      <div className="container_fluid">
        <div className="flex flex-col xl:flex-row xl:justify-between gap-7">
          <CardCheckout />
          <div className="w-full sm:w-[439px] h-fit px-7.5 pt-7.5 pb-13 bg-white rounded-[5px]">
            <h4 className="text-xl font-medium leading-[30px] text-blackPrimary">
              My Orders
            </h4>
            <div className="py-7 space-y-3 border-b-[1.73px] border-lightGrayBlue">
              <div className="flex items-center justify-between">
                <p className="text-lg leading-[26px] text-lineThrough">
                  Subtotal
                </p>
                <h4 className="text-xl font-medium leading-[30px] text-blackPrimary">
                  ৳1,952.66
                </h4>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg leading-[26px] text-lineThrough">
                  Free Shipping
                </p>
                <h4 className="text-xl font-medium leading-[30px] text-blackPrimary">
                  ৳0
                </h4>
              </div>
            </div>
            <div className="pt-6 pb-7.5 flex items-center justify-between">
              <p className="text-lg font-medium leading-[27px] text-blackPrimary">
                Order Total
              </p>
              <h3 className="text-xl 2xl:text-heading28 leading-[42px] font-semibold text-secondary">
                ৳1,956.66
              </h3>
            </div>
            <button className="w-full 2xl:w-[380px] h-14 px-1 2xl:px-0 rounded bg-secondary flex items-center justify-center">
              <span className="text-xl text-backgroundNav leading-[30px] font-semibold">
                Proceed to Checkout
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
