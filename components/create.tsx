function Create(){

    return(
        <div className="flex justify-between mt-[300px]">

            <div
                className="relative right-[1%] rounded-xl bg-gold box-border w-[47%] h-[451px] border-[3px] border-solid border-black flex justify-center">

                <img
                    className="overflow-visible relative bottom-[300px] w-[536px] h-[808px] object-cover"
                    alt=""
                    src="/349shots-so-1@2x.png"
                />
            </div>



            <div className="flex flex-col w-[47%]">

                <div className="flex">


                    <div
                        className="w-[277px] h-[107px] font-fugaz-one  text-gray-100 text-[42px] relative flex items-center justify-center mt-[104px] ">
                        {/* 黑色背景框 */}
                        <div className="bg-black rounded-xl w-[268px] h-[99px] relative top-2 left-2 "></div>
                        {/* 白色前景框 */}
                        <div
                            className="bg-white rounded-xl w-[268px] h-[99px]  absolute box-border   border-[3px] border-solid border-black"></div>
                        {/* 文本内容区 */}
                        <div className="w-[168px] h-[68px] flex items-center justify-center absolute">
                            Create
                        </div>
                    </div>


                    <img
                        className="mt-[78px] w-[139px] h-[103px] object-contain"
                        alt=""
                        src="/scribbles2@2x.png"
                    />
                </div>

                <div
                    className=" text-darkslategray-100 mt-[37px]">Organize events quick & easy & the
                    way you like.
                </div>

            </div>
        </div>


    );


}


export default Create;