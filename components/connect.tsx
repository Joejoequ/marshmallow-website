import exp from "node:constants";

function Connect() {


    return (


        <div className="flex">

            <div className="flex w-[50%] ">
                <div className="flex flex-col">


                    <div
                        className="flex flex-col items-center justify-center w-[276px] h-[107px] font-fugaz-one text-26xl text-gray-100 relative bg-transparent mt-[208px] ml-[94px]">
                        {/* 黑色背景框与白色框叠加 */}
                        <div className="relative w-full h-full">
                            {/* 黑色背景框 */}
                            <div className="bg-black rounded-xl w-[268px] h-[99px] mt-2 ml-[0px]"></div>
                            {/* 白色前景框 */}
                            <div
                                className="bg-white rounded-xl box-border w-[268px] h-[99px] border-[3px] border-solid  border-black absolute top-0 left-2"></div>
                        </div>
                        {/* 文本内容层 */}
                        <div
                            className="w-[183px] h-[68px] flex items-center justify-center absolute top-[16px] left-[51px] leading-[150%]">
                            Connect
                        </div>
                    </div>


                    <div className=" leading-[150%] inline-block w-[566px] mt-[33px] ml-[94px]">
                        <p className="m-0">The hobby journey reflects on your growth and</p>
                        <p className="m-0">connect with others who share your interests.</p>
                    </div>
                </div>

                <div className="absolute  mt-[80px] w-full flex justify-center">

                    <img
                        className=" w-[305.6px] h-[351.5px] object-contain relative z-10"
                        alt=""
                        src="/scribbles@2x.png"
                    />
                </div>
            </div>


            <div
                className="rounded-xl bg-dodgerblue box-border h-[681px] border-[3px] border-solid border-black w-[50%] flex justify-center">

                <img
                    className=" w-[552px] h-[717px] object-cover"
                    alt=""
                    src="/339shots-so@2x.png"
                />
            </div>

        </div>
    );
}

export default Connect;