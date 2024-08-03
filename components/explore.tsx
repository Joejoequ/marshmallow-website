function Explore() {


    return (
        <div
            className="mt-[13.89vw] flex justify-center bg-tomato box-border w-full border-t-[3px] border-b-[3px] border-solid border-black  h-[28.05vw] ">
            <div className=" overflow-visible flex flex-shrink-0 ">
                <img
                    className="relative overflow-visible w-[52.5vw] bottom-[5.56vw] right-[8.33vw] object-cover"
                    alt=""
                    src="/852shots-so@2x.png"/>

            </div>
            <div className="pt-[5.9vw]">
                <img
                    className="relative right-[13.89vw] w-[14.44vw]  object-cover"
                    alt=""
                    src="/scribbles4@2x.png"
                />
            </div>

            <div className="relative right-[10.42vw]">


                <div
                    className="w-[19.24vw] h-[7.43vw] font-fugaz-one  text-gray-100  relative flex items-center justify-center mt-[5.42vw] ">
                    {/* 黑色背景框 */}
                    <div className="bg-black rounded-[1.39vw]  w-[18.61vw] h-[6.88vw] relative top-[0.56vw] left-[0.56vw] "></div>
                    {/* 白色前景框 */}
                    <div
                        className="bg-white rounded-[1.39vw] w-[18.61vw] h-[6.88vw]  absolute box-border   border-[3px] border-solid border-black"></div>
                    {/* 文本内容区 */}
                    <div className="w-[11.67vw] h-[4.72vw] flex text-[3.125vw] items-center justify-center absolute">
                        Explore
                    </div>
                </div>

                <div
                    className="leading-[150%] inline-block w-[36.04vw] mt-[2.22vw] text-[1.66vw] ">Never miss out
                    nearby
                    events, explore & experience fun activities with others.
                </div>

            </div>
        </div>


    );
}

export default Explore;