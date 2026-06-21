"use client"
const NewsLetterBox = () => {

        const onSubmitHandler = (e) => {
                e.preventDefault()
        }
        return (
                <div className="text-center">
                        <p className="text-2xl font-medium text-gray-800">همین حالا ثبت نام کنید و 20% تخفیف بگیرید</p>
                        <p className="text-gray-400 mt-3">
                                از جدیدترین محصولات و تخفیف ها و جوایز شگفت انگیز ما با خبر شوید
                        </p>
                        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto py-6 border pl-3" >
                                <input className="w-full sm:flex-1 outline-none" type="email" placeholder="ایمیل خود را وارد کنید ..." required />
                                <button className="bg-black text-white text-xs px-10 py-4" type="submit">ثبت نام</button>
                        </form>
                </div>
         );
}
 
export default NewsLetterBox;