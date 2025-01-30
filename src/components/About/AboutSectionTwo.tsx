import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section
      id="about"
      className="bg-gray-light py-16 dark:bg-gray-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
            نبذه عنا
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 xl:text-lg">
            نحن نقدم حلول تكنولوجية مبتكرة تساعدك على تحقيق أهدافك
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto aspect-[25/24] max-w-[500px] text-center"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  مهمتنا
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  متخصصون في تطوير برامج الدسكتوب وتطبيقات الويب عالية الجودة
                  التي تلبي احتياجات الشركات المختلفة. كما نقدم خدمات مخصصة وفق
                  الطلب لتناسب متطلبات عملائنا بدقة واحترافية.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  رؤيتنا
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  نعمل على توفير أفضل الأجهزة والمعدات الخاصة بنقاط البيع، مما
                  يساهم في تحسين تجربة العمل وتعزيز الكفاءة التشغيلية. نضع رضا
                  عملائنا في المقام الأول، ونسعى دائماً لتقديم حلول تكنولوجية
                  متطورة تواكب أحدث الاتجاهات في مجال تكنولوجيا الأعمال.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  قدرتنا
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  فريقنا المحترف يعمل بجد لتقديم منتجات وخدمات ذات جودة عالية،
                  ونحن ملتزمون بتوفير حلول مبتكرة تساعد عملاءنا على تحقيق
                  نجاحاتهم في السوق.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
