import Image from "next/image";
import { assets } from "../../assets/assets";

const Policy = () => {
        return ( 
                <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 px-5  md:px-10">
                        <div>
                                <Image src={assets.exchange_icon} alt="exchange-icon" className="w-12 m-auto mb-5" />
                                <p className="font-semibold">شرایط مرجوعی بسیار آسان</p>
                                <p className="text-gray-400">مرجوع کردن کالا بدون دریافت هزینه اضافی</p>
                        </div>
                        <div>
                                <Image src={assets.quality_icon} alt="exchange-icon" className="w-12 m-auto mb-5" />
                                <p className="font-semibold">مدت زمان هفت روزه</p>
                                <p className="text-gray-400">هفت روز زمان برای تست کالا و مرجوعی</p>
                        </div>
                        <div>
                                <Image src={assets.support_img} alt="exchange-icon" className="w-12 m-auto mb-5" />
                                <p className="font-semibold">بهترین پشتیبانی از مشتری</p>
                                <p className="text-gray-400">پشتیبانی 24 ساعته در هفت روز هفته</p>
                        </div>
                </div>
         );
}
 
export default Policy;