function Explore() {


    return (
        <div
            className="mt-[350px] flex justify-center bg-tomato box-border w-full border-t-[3px] border-b-[3px] border-solid border-black  h-[404px] ">
            <div className=" overflow-visible flex flex-shrink-0 ">
                <img
                    className="relative overflow-visible w-[756px] bottom-[80px] right-[120px] object-cover"
                    alt=""
                    src="/852shots-so@2x.png"/>

            </div>
            <div className="pt-[85px]">
                <img
                    className="relative right-[200px] w-52 h-[203px] object-cover"
                    alt=""
                    src="/scribbles4@2x.png"
                />
            </div>

            <div className="relative right-[150px]">


                <div
                    className="w-[277px] h-[107px] font-fugaz-one  text-gray-100 text-26xl relative flex items-center justify-center mt-[78px] ">
                    {/* 黑色背景框 */}
                    <div className="bg-black rounded-xl w-[268px] h-[99px] relative top-2 left-2 "></div>
                    {/* 白色前景框 */}
                    <div
                        className="bg-white rounded-xl w-[268px] h-[99px]  absolute box-border   border-[3px] border-solid border-black"></div>
                    {/* 文本内容区 */}
                    <div className="w-[168px] h-[68px] flex items-center justify-center absolute">
                        Explore
                    </div>
                </div>

                <div
                    className="leading-[150%] inline-block w-[519px] mt-[32px]">Never miss out
                    nearby
                    events, explore & experience fun activities with others.
                </div>

            </div>
        </div>


    );
}

export default Explore;