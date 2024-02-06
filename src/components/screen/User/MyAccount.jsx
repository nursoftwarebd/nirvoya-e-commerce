import { userInfo } from "@/data/userInfo";
import Image from "next/image";
import edit from "../../../assets/icons/edit.svg";

const MyAccount = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
          <p className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
            Personal Information
          </p>
          <button className="flex items-center gap-1">
            <Image src={edit} alt="edit" />
            <span className="text-grayEdit leading-6 tracking-[2%]">Edit</span>
          </button>
        </div>
        <div className="px-5 py-6.5">
          {userInfo.map((info) => (
            <div key={info.id} className="flex items-center lg:gap-[200px]">
              <div className="space-y-6">
                <div>
                  <span className="text-grayEdit leading-6 uppercase">
                    First Name
                  </span>
                  <h5 className="text-blackPrimary leading-6 capitalize">
                    {info.firstName}
                  </h5>
                </div>
                <div>
                  <span className="text-grayEdit leading-6">Email Address</span>
                  <h5 className="text-blackPrimary leading-6">{info.email}</h5>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-grayEdit leading-6 capitalize">
                    Last Name
                  </span>
                  <h5 className="text-blackPrimary leading-6 capitalize">
                    {info.lastName}
                  </h5>
                </div>
                <div>
                  <span className="text-grayEdit leading-6 capitalize">
                    Mobile Number
                  </span>
                  <h5 className="text-blackPrimary leading-6">{info.mobile}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 bg-white">
        <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
          <p className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold uppercase">
            ADDRESS BOOK
          </p>
          <button className="flex items-center gap-1">
            <Image src={edit} alt="edit" />
            <span className="text-grayEdit leading-6 tracking-[2%]">Edit</span>
          </button>
        </div>
        <div className="px-5 py-6.5">
          {userInfo.map((info) => (
            <div key={info.id} className="flex items-center lg:gap-[200px]">
              <div>
                <span className="text-grayEdit leading-6">
                  Default Billing Address
                </span>
                <h5 className="text-blackPrimary leading-6">{info.address}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
