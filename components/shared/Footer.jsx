import Image from "next/image";
import { assets } from "../../assets/assets";

const Footer = () => {
        return ( 
                <div>
                        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-5  md:px-10">
                                <div>
                                <h1 className='text-4xl  sm:text-3xl md:text-4xl font-bold mb-4'>سامان شاپ</h1>
                                        <p className="w-full md:w-2/3 text-gray-600">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                                </div>
                                <div>
                                        <p className="text-xl font-medium mb-5">کمپانی</p>
                                        <ul className="flex flex-col gap-1 text-gray-600">
                                                <li>صفحه اصلی</li>
                                                <li>درباره ما</li>
                                                <li>ارسال مرسولات</li>
                                                <li>قوانین و مقررات</li>
                                        </ul>
                                </div>
                                <div>
                                        <p className="text-xl font-medium mb-5">با ما در ارتباط باشید</p>
                                        <ul className="flex flex-col gap-1 text-gray-600">
                                                <li>+21-6516-1234</li>
                                                <li>sam.karimi727@gmail.com</li>
                                        </ul>
                                </div>
                        </div>
                        <div>
                                <hr />
                                <p className="py-5 text-sm text-center">این وب سایت تحت مالکیت سامان کریمی میباشد</p>
                        </div>
                </div>
         );
}
 
export default Footer;