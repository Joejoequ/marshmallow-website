import exp from "node:constants";

function Navbar() {


    return (

        <div className="lg:h-[200px] h-[100px] flex justify-between">
            <div className=" text-xl text-black font-fredoka-one ">
                <div className=" flex flex-row items-center justify-start gap-[22px] mt-[25px] ml-[25px] lg:mt-[68px] lg:ml-[68px] ">
                    <img
                        className="lg:w-[68px] lg:h-[68px] w-[45px] h-[45px] rounded-[352.5px]  object-cover"
                        alt=""
                        src="/logo07@2x.png"
                    />
                    <div className=" tracking-[-0.01em] leading-[150%]">
                        Marshmallow
                    </div>
                </div>
            </div>


            <div className=" text-xl font-fredoka text-black flex ">


                <div className="lg:pt-[86px] lg:pr-[84px] md:pr-[42px] pt-[35px] pr-[10px]">
                    <a>About</a>
                </div>
                <div>
                    <img
                        className="lg:pt-[78px] lg:pr-[25px]  md:pr-[15px] pt-[29px] pr-[10px] h-[42px] w-[42px]"
                        alt=""
                        src="/group6.svg"
                    /></div>
                <div>
                    <img
                        className="lg:pt-[79px] lg:pr-[25px] md:pr-[15px] pt-[29px]  pr-[10px] "
                        alt=""
                        src="/group5.svg"
                    /></div>


                <div>
                    <img
                        className="lg:pt-[82px] lg:pr-[82px] md:pr-[41px] pt-[34px]  pr-[25px] "
                        alt=""
                        src="/layer-11.svg"
                    /></div>
            </div>

        </div>

    );
}

export default Navbar;