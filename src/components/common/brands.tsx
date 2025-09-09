import Image from "next/image";

const Brands = () => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full overflow-x-auto px-3 text-center [&::-webkit-scrollbar]:hidden">
        <div className="px-2">
          <div className="w-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/nike.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Nike</p>
        </div>
        <div className="px-2">
          <div className="w-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/adidas.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Adidas</p>
        </div>
        <div className="px-2">
          <div className="w-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/puma.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Puma</p>
        </div>
        <div className="px-2">
          <div className="w-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/newbalance.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">New Balance</p>
        </div>
        <div className="px-2">
          <div className="w-[120px] h-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/converse.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Converse</p>
        </div>
        <div className="px-2">
          <div className="w-[120px] h-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/polo.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3 h-[120px]"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Polo</p>
        </div>
        <div className="px-2">
          <div className="flex items-center w-[120px] h-[120px] rounded-xl border border-[#F1F1F1]">
            <Image
              src="/zara.svg"
              alt="Nike"
              width={120}
              height={120}
              className="p-3"
            />
          </div>
          <p className="mt-2 text-sm font-semibold">Zara</p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
