"use client";
import { z } from "zod";
import NewsLatterBox from "./NewsLatterBox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  fullName: z.string().min(1, { message: "الاسم مطلوب" }),
  email: z.string().email({ message: "البريد الالكترونى غير صحيح" }),
  phoneNumber: z.string().min(3, { message: "الرقم غير صحيح" }),
  subject: z.string(),
  message: z.string().min(1, { message: "الرسالة مطلوبة" }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm({ resolver: zodResolver(contactSchema) });
  const sendMessage = async () => {
    try {
      await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getValues()),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(() => {
          if (isSubmitSuccessful) {
            reset();
          }
        });
    } catch (error) {
      console.error("Error sending contact request:", error);
    }
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-lg bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                اطلب خدمة
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                اطلب خدمة الان وسوف نقوم بالرد عليك في اقرب وقت ممكن
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        اسمك
                      </label>
                      <input
                        type="text"
                        placeholder="ادخل اسمك"
                        {...register("fullName")}
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors && errors.fullName && (
                        <span className="text-red-500">
                          {errors?.fullName?.message?.toString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        البريد الالكتروني
                      </label>
                      <input
                        type="email"
                        placeholder="ادخل البريد الالكتروني"
                        {...register("email")}
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors && errors.email && (
                        <span className="text-red-500">
                          {errors?.email?.message?.toString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        placeholder="ادخل رقم الهاتف"
                        {...register("phoneNumber")}
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none placeholder:float-end focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors && errors.phoneNumber && (
                        <span className="text-red-500">
                          {errors?.phoneNumber?.message?.toString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        عنوان الرسالة
                      </label>
                      <input
                        type="email"
                        placeholder=" ادخل عنوان الرسالة"
                        {...register("subject")}
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      {errors && errors.subject && (
                        <span className="text-red-500">
                          {errors?.subject?.message?.toString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        رسالتك
                      </label>
                      <textarea
                        rows={5}
                        placeholder="ادخل رسالتك"
                        {...register("message")}
                        className="border-stroke w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                      {errors && errors.message && (
                        <span className="text-red-500">
                          {errors?.message?.message?.toString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit(sendMessage)}
                      className="me-5 rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {isSubmitting ? "جاري الارسال..." : "ارسال"}
                    </button>
                    {isSubmitSuccessful && isSubmitted && (
                      <span className="text-green-500">
                        تم ارسال الرسالة بنجاح
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
