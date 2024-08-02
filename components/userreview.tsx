function UserReview() {
    return (

        <div className="flex flex-col userReview-background mt-[200px]">

            <div className="flex justify-center relative left-[3%] top-[50px]">
                <div
                    className=" text-26xl tracking-[-0.02em] leading-[150%] font-fugaz-one text-black">
                    What happy users have to say
                </div>
                <img
                    className="w-32 h-24 object-contain"
                    alt=""
                    src="/scribbles5@2x.png"
                />


            </div>


            <div className="flex flex-wrap justify-center items-start relative top-[100px]">

                <div className="flex flex-col items-center ">
                    <img src="/rectangle-3467508@2x.png" alt="" className="rounded-xl w-[474.7px] h-[521.2px] "/>
                    <div className="rounded-xl bg-darkslategray-100 w-[362.5px] h-[102px] [transform:_rotate(-11deg)] [transform-origin:0_0] opacity-[0.6]   text-white font-pt-mono relative left-[4.21%] bottom-[120px]">
                        <div className="mt-[12px] mb-[5px] ml-[20px] ">
                        <b className="leading-[150%] ">Chloe Chen</b></div>
                        <div className="text-xl tracking-[-0.02em] leading-[150%] font-dm-sans ml-[20px]">Marketing Manager</div>
                    </div>
                </div>


                <div className="flex flex-col items-center ml-[10px] mr-[-10px] mt-[60px]">
                    <img src="/rectangle-3467509@2x.png" alt="" className="rounded-xl w-[388.9px] h-[431.3px] object-contain"/>
                    <div className="rounded-xl  bg-darkslategray-100 text-white font-pt-mono w-[312.5px] h-[111.5px] [transform:_rotate(7.5deg)] [transform-origin:0_0] opacity-[0.6] relative right-[8px] bottom-[170px]">
                        <div className="mt-[12px] mb-[5px] ml-[20px] ">
                        <b className="leading-[150%] text-white">Mark Zhou</b></div>
                        <div className="text-xl tracking-[-0.02em] leading-[150%] font-dm-sans text-white ml-[20px]">Designer</div>
                    </div>
                </div>


                <div className="flex flex-col items-center relative right-[5px]">
                    <img src="/rectangle-3467510@2x.png" alt="" className="rounded-xl w-[403.8px] h-[453.7px] object-contain"/>
                    <div className="rounded-xl bg-darkslategray-100 w-[341.8px] h-[110.3px] [transform:_rotate(-4.4deg)] [transform-origin:0_0] opacity-[0.6] text-white font-pt-mono relative left-[9px] bottom-[130px]">

                        <div className="mt-[12px] mb-[5px] ml-[20px] ">
                            <b className="leading-[150%]">Julia</b></div>
                        <div className="text-xl tracking-[-0.02em] leading-[150%] font-dm-sans ml-[20px]">Accountant</div>
                    </div>
                </div>
            </div>




            <div className="relative  flex justify-center">

                <img
                    className=" w-[286.1px] h-[283.8px] object-contain"
                    alt=""
                    src="/scribbles3@2x.png"
                />

                <div className="flex items-center">
                <i className=" leading-[150%] inline-block font-bold w-[704px] h-[92px]">
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