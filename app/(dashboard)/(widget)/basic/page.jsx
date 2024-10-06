"use client";
import Button from "@/components/ui/Button";

const rabitWidget = [
  {
    bg: "bg-slate-900 dark:bg-slate-800",
  },
  {
    bg: "bg-primary-500",
  },
  {
    bg: "bg-success-500",
  },
  {
    bg: "bg-info-500 ",
  },
];
const griftWidget = [
  {
    bg: "bg-slate-900 dark:bg-slate-800",
  },
  {
    bg: "bg-primary-500",
  },
  {
    bg: "bg-success-500",
  },
  {
    bg: "bg-info-500 ",
  },
  {
    bg: "bg-danger-500 ",
  },
  {
    bg: "bg-warning-500 ",
  },
];
const BasicWidget = () => {
  return (
    <div className="space-y-5">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <div
          className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
          style={{
            backgroundImage: `url(assets/images/all-img/widget-bg-3.png)`,
          }}
        >
          <div className="max-w-[180px]">
            <h4 className="text-xl font-medium text-white mb-2">
              Upgrade your Dashcode
            </h4>
            <p className="text-sm text-white text-opacity-80">
              Pro plan for better results
            </p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium flex flex-col items-center justify-center">
            Now
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-1.png)`,
          }}
        >
          <div className="max-w-[180px]">
            <div className="text-xl font-medium text-slate-900 mb-2">
              Upgrade your Dashcode
            </div>
            <p className="text-sm text-slate-800">
              Pro plan for better results
            </p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium flex flex-col items-center justify-center">
            Now
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative"
          style={{
            backgroundImage: `url(assets/images/all-img/widget-bg-3-1.png)`,
          }}
        >
          <div className="max-w-[180px]">
            <div className="text-xl font-medium text-slate-900 mb-2">
              Upgrade your Dashcode
            </div>
            <p className="text-sm text-slate-800">
              Pro plan for better results
            </p>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white rounded-full text-xs font-medium flex flex-col items-center justify-center">
            Now
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-2.png)`,
          }}
        >
          <div className="max-w-[180px]">
            <h4 className="text-xl font-medium text-white mb-2">
              <span className="block font-normal">Good evening,</span>
              <span className="block">Mr. Dianne Russell</span>
            </h4>
            <p className="text-sm text-white font-normal">
              Welcome to Dashcode
            </p>
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-4.png)`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <div className="text-xl font-medium text-slate-900 mb-2">
                <span className="block font-normal">Good evening,</span>
                <span className="block">Mr. Dianne Russell</span>
              </div>
              <p className="text-sm text-slate-900 font-normal">
                Welcome to Dashcode
              </p>
            </div>
          </div>
          <div className="flex-none">
            <img
              src="/assets/images/svg/widgetvector.svg"
              alt=""
              className="ml-auto"
            />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-5.png)`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <div className="text-xl font-medium text-white dark:text-slate-800 mb-2">
                <span className="block font-normal">Good evening,</span>
                <span className="block">Mr. Dianne Russell</span>
              </div>
              <p className="text-sm text-wgite text-white dark:text-slate-800 font-normal">
                Welcome to Dashcode
              </p>
            </div>
          </div>
          <div className="flex-none">
            <img
              src="/assets/images/svg/widgetvector2.svg"
              alt=""
              className="ml-auto"
            />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-5.png)`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-white mb-2">
                <span className="block text-sm">Current balance,</span>
                <span className="block">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              className="btn-light bg-white btn-sm "
            />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-7.png)`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block text-sm dark:text-slate-800">
                  Current balance,
                </span>
                <span className="block dark:text-slate-800">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              className="btn-light bg-white btn-sm "
            />
          </div>
        </div>
        {/* ?? end Single ?? */}
        <div
          className="bg-no-repeat bg-cover bg-center px-5 py-8 rounded-[6px] relative flex items-center"
          style={{
            backgroundImage: `url(/assets/images/all-img/widget-bg-8.png)`,
          }}
        >
          <div className="flex-1">
            <div className="max-w-[180px]">
              <h4 className="text-2xl font-medium text-slate-900 mb-2">
                <span className="block text-sm dark:text-slate-800">
                  Current balance,
                </span>
                <span className="block dark:text-slate-800">$34,564</span>
              </h4>
            </div>
          </div>
          <div className="flex-none">
            <Button
              icon="heroicons-outline:eye"
              text="View details"
              className="btn-light bg-white btn-sm "
            />
          </div>
        </div>
      </div>



    </div>
  );
};

export default BasicWidget;
