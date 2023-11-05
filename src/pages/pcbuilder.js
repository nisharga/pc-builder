import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";
import RootLayout from "@/layout/layout";
import Image from "next/image";
import { BsFillCpuFill } from "react-icons/bs";
import { BsFillMotherboardFill } from "react-icons/bs";
import { useSelector } from "react-redux";
// import { FaMemory} from "react-icons/fa"; = ram
// import { ImPowerCord} from "react-icons/im"; = power
// import { MdSdStorage } from "react-icons/md"; = stroage
// import { MdMonitor } from "react-icons/md"; = monitor

const Pcbuilder = () => {
  const { ramproducts } = useSelector((state) => state.ram);
  console.log(ramproducts);
  return (
    <div>
      <SectinonBannar
        title="PC Builder"
        content="Build Your Own PC Just 1 minutes"
        bannar="https://images.pexels.com/photos/7639373/pexels-photo-7639373.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className="mx-10 mt-12">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="text-4xl">
              <BsFillCpuFill />
            </span>
            <span className="ml-2 text-2xl">Ram</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/ram/crucial/8gb-ddr5/8gb-ddr5-500x500.webp"
              alt="image"
              width={70}
              height={70}
            />
            <h3 className="font-bold ml-3">
              Intel Pentium Gold G7400 Alder Lake Processor
            </h3>
          </div>
          <div className="col-span-1 flex items-center">
            <h3 className="font-bold">{15000} TK</h3>
          </div>

          <div className="col-span-2 flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3">
          <div className="lg:col-span-2 col-span-3 bg-gray-500 text-[#fff] flex items-center font-2xl p-2">
            <span className="lg:text-4xl text-lg">
              <BsFillMotherboardFill />
            </span>
            <span className="ml-2 lg:text-2xl text-md">MotherBoard</span>
          </div>
          <div className="lg:col-span-7 col-span-6 flex items-center ml-2">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/ram/crucial/8gb-ddr5/8gb-ddr5-500x500.webp"
              alt="image"
              width={70}
              height={70}
            />
            <h3 className="font-bold ml-3">
              Intel Pentium Gold G7400 Alder Lake Processor
            </h3>
          </div>
          <div className="col-span-1 flex items-center">
            <h3 className="font-bold">{15000} TK</h3>
          </div>

          <div className="col-span-2 flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pcbuilder;

Pcbuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
