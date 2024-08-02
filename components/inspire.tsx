function Inspire() {


    return (


        <div
            className="flex  bg-darkseagreen box-border w-full h-[518px] border-t-[3px] border-b-[3px] border-solid border-black mt-[131px]">


                <div className="flex flex-col w-[55%]">


                    <div>

                        <div className="flex">
                            <div
                                className="flex flex-col items-center justify-center w-[276px] h-[107px] font-fugaz-one text-26xl text-gray-100 relative bg-transparent mt-[144px] ml-[137px]">
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
                                    Inspire
                                </div>
                            </div>


                            <img
                                className=" w-[274px] h-[214.6px] object-contain opacity-[0.9] mt-[85px]"
                                alt=""
                                src="/scribbles1@2x.png"
                            />

                        </div>

                    </div>
                    <div className=" leading-[150%] inline-block w-[631px] ml-[137px] mt-[31px]">
                        Feedback system helps filter fake profiles, connect with authentic
                        people within our community.
                    </div>
                </div>



            <div className="w-[45%] flex justify-center">
                <img
                    className="relative top-[20px] w-[323.6px] h-[497.6px] object-cover"
                    alt=""
                    src="/622shots-so@2x.png"
                />
            </div>

        </div>


    );


}

export default Inspire;