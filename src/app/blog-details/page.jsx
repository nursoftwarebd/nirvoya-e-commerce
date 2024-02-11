import Breadcrumb from "@/components/shared/Breadcrum/Breadcrumb";

export const metadata = {
  title: "NIRVOYA - Blog Details Page",
  description: "Generated by Nur IT Software LTD.",
};

const breadcrumb = [
  { name: "Home", url: "/" },
  { name: "Men’s fashion", url: "/men-fashion" },
];

const BlogDetailsPage = () => {
  return (
    <section className="pt-14 pb-13  bg-backgroundPage">
      <div className="container_fluid">
        <Breadcrumb
          pageName="Everything You Need To Know About Customized Leather Jacket."
          breadcrumb={breadcrumb}
        />
      </div>
    </section>
  );
};

export default BlogDetailsPage;