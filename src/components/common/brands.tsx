import Image from "next/image";

const Brands = () => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full overflow-x-auto px-3 text-center [&::-webkit-scrollbar]:hidden">
        <div className="px-2">
          <div className="w-[80px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/nike.svg"
              alt="Nike"
              width={80}
              height={80}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Nike</p>
        </div>
        <div className="px-2">
          <div className="w-[80px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/adidas.svg"
              alt="Nike"
              width={80}
              height={80}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Adidas</p>
        </div>
        <div className="px-2">
          <div className="w-[80px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/puma.svg"
              alt="Nike"
              width={80}
              height={80}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Puma</p>
        </div>
        <div className="px-2">
          <div className="w-[80px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/newbalance.svg"
              alt="Nike"
              width={80}
              height={80}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">New Balance</p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
