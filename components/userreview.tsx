function UserReview() {
    return (

        <div className="flex flex-col userReview-background mt-[13.89vw]">

            <div className="flex justify-center relative left-[3%] top-[3.47vw]">
                <div
                    className=" text-[3.125vw] tracking-[-0.02em] leading-[150%] font-fugaz-one text-black">
                    What happy users have to say
                </div>
                <img
                    className="w-[8.89vw] h-[6.67vw] object-contain"
                    alt=""
                    src="/scribbles5@2x.png"
                />


            </div>


            <div className="flex flex-wrap justify-center items-start relative top-[6.94vw]">

                <div className="flex flex-col items-center ">
                    <img src="/rectangle-3467508@2x.png" alt="" className="rounded-[1.39vw] w-[32.97vw] h-[36.2vw] "/>
                    <div
                        className="rounded-xl bg-darkslategray-100 w-[25.17vw] h-[7.08vw] [transform:_rotate(-11deg)] [transform-origin:0_0] opacity-[0.6]   text-white font-pt-mono relative left-[4.21%] bottom-[8.33vw]">
                        <div className="mt-[0.83333vw] mb-[0.34722vw] ml-[1.38889vw]">
                            <b className="leading-[150%] text-[1.67vw]">Chloe Chen</b>
                        </div>
                        <div className=" tracking-[-0.02em] leading-[150%] font-dm-sans ml-[1.38889vw] text-[1.39vw]">
                            Marketing Manager
                        </div>

                    </div>
                </div>


                <div className="flex flex-col items-center ml-[0.69444vw] mr-[-0.69444vw] mt-[4.16667vw]">
                    <img src="/rectangle-3467509@2x.png" alt=""
                         className="rounded-[1.39vw] w-[26.9931vw] h-[29.9514vw] object-contain"/>
                    <div
                        className="rounded-[1.39vw] bg-darkslategray-100 text-white font-pt-mono w-[21.7014vw] h-[7.74306vw] [transform:_rotate(7.5deg)] [transform-origin:0_0] opacity-[0.6] relative right-[0.55556vw] bottom-[11.8056vw]">
                        <div className="mt-[0.83333vw] mb-[0.34722vw] ml-[1.38889vw] ">
                            <b className="leading-[150%] text-white text-[1.67vw]">Mark Zhou</b>
                        </div>
                        <div
                            className="text-[1.39vw] tracking-[-0.02em] leading-[150%] font-dm-sans text-white ml-[1.38889vw]">Designer
                        </div>
                    </div>
                </div>


                <div className="flex flex-col items-center relative right-[0.34722vw]">
                    <img src="/rectangle-3467510@2x.png" alt=""
                         className="rounded-[0.09722vw] w-[28.0417vw] h-[31.4931vw] object-contain"/>
                    <div
                        className="rounded-[0.09722vw] bg-darkslategray-100 w-[23.7361vw] h-[7.65972vw] [transform:_rotate(-4.4deg)] [transform-origin:0_0] opacity-[0.6] text-white font-pt-mono relative left-[0.625vw] bottom-[9.02778vw]">
                        <div className="mt-[0.83333vw] mb-[0.34722vw] ml-[1.38889vw] ">
                            <b className="leading-[150%] text-[1.67vw]">Julia</b>
                        </div>
                        <div
                            className="text-[1.39vw] tracking-[-0.02em] leading-[150%] font-dm-sans ml-[1.38889vw]">Accountant
                        </div>
                    </div>
                </div>

            </div>


            <div className="relative flex justify-center">
                <img
                    className="w-[19.8681vw] h-[19.7083vw] object-contain"
                    alt=""
                    src="/scribbles3@2x.png"
                />
                <div className="flex items-center">
                    <i className="leading-[150%] inline-block font-bold w-[48.8889vw] h-[6.38889vw] text-[1.67vw]">
                        "Marketing is my job, but marketing myself is also part of my life. I
                        like how I can put my interests tags on Marshmallow and meet like-minded
                        people! It’s fun!"
                    </i>
                </div>
            </div>


        </div>


    );


}

export default UserReview;