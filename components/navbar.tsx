import exp from "node:constants";

function Navbar(){



    return (

        <div>
            <div className="absolute top-[69px] left-[67px] w-[217px] h-[68px] text-xl text-black font-fredoka-one">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[22px]">
                    <img
                        className="w-[68px] relative rounded-[352.5px] h-[68px] object-cover"
                        alt=""
                        src="/logo07@2x.png"
                    />
                    <div className="relative tracking-[-0.01em] leading-[150%]">
                        Marshmallow
                    </div>
                </div>
            </div>


            <div className="absolute top-[86px] left-[1051px] text-xl font-fredoka text-black">
                About
            </div>


            <img
                className="absolute h-[0.76%] w-[2.77%] top-[1.51%] right-[9.88%] bottom-[97.73%] left-[87.35%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group5.svg"
            />
            <img
                className="absolute h-[0.8%] w-[2.9%] top-[1.49%] right-[14.39%] bottom-[97.71%] left-[82.71%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group6.svg"
            />
            <img
                className="absolute h-[0.65%] w-[2.43%] top-[1.57%] right-[5.72%] bottom-[97.79%] left-[91.85%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/layer-11.svg"
            />


        </div>

    );
}

export default Navbar;