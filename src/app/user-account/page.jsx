import Tabs from "@/components/screen/User/Tabs";
import { tabs } from "@/data/tabs";

export const metadata = {
  title: "NIRVOYA - User-Account Page",
  description: "Generated by Nur IT Software LTD.",
};

const page = () => {
  return (
    <section className="pt-6 pb-21 bg-backgroundPage">
      <div className="container_fluid">
        <h3 className="my_account">My Account</h3>
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default page;
