import apple from "../../../assets/apple-logo.png";
import huawei from "../../../assets/huawei.png";
import playStore from "../../../assets/play-store.png";
import heroImg from "../../../assets/hero-bg.png";
import scrollUp from "../../../assets/scrollUp.png";

function Hero() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="hero px-7  container mx-auto ">
      <div className=" flex flex-col-reverse items-center pt-52 mt-10 space-y-0 md:space-y-0 md:flex-row ">
        <div className="flex flex-col mb-32  space-y-12 md:max-w-md">
          <h1 className="text-arseniColor font-bold text-4xl	">
            LIVE EXPERIENCE<span className="text-magentaColor"> REDEFINED</span>
          </h1>
          <p className="text-base tex-black">
            Watch, create, learn and much more; all through one platform to
            fulfill your needs in various industries and serve your business
            virtually where the whole world is watching.
          </p>
          <div>
            <p className="font-bold text-arseniColor text-lg">
              Download the free Livaat App
            </p>
            <div className="logos-link flex justify-between w-72 mt-5">
              <a href="#">
                <img src={apple} alt="logo" />
              </a>
              <a href="#">
                <img src={playStore} alt="logo" />
              </a>
              <a href="#">
                <img src={huawei} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-20  md:w-7/12 flex ">
        <img className="w-full " src={heroImg} alt="heoImg" />
      </div>

      <img
        className="scroll-up-button"
        onClick={handleClick}
        src={scrollUp}
        alt="scroll up"
      />
    </div>
  );
}

export default Hero;
