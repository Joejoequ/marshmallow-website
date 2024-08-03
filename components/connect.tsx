import exp from "node:constants";

function Connect() {


    return (


        <div className="flex mt-[6.86806vw] justify-between">
            <div className="flex w-[47%]">
                <div className="flex flex-col">
                    <div
                        className="flex flex-col items-center justify-center w-[19.1667vw] h-[7.43056vw] font-fugaz-one text-26xl text-gray-100 relative bg-transparent mt-[14.4444vw] ml-[6.52778vw]">
                        <div className="relative w-full h-full">
                            <div className="bg-black rounded-[1.39vw] w-[18.6111vw] h-[6.875vw] mt-[0.56vw] ml-[0px]"></div>
                            <div
                                className="bg-white rounded-[1.39vw] box-border w-[18.6111vw] h-[6.875vw] border-[0.208333vw] border-solid  border-black absolute top-0 left-[0.56vw]"></div>
                        </div>
                        <div
                            className="w-[12.7083vw] text-[3.125vw] h-[4.72222vw] flex items-center justify-center absolute top-[1.11111vw] left-[3.54167vw] leading-[150%]">
                            Connect
                        </div>
                    </div>
                    <div className="leading-[150%] inline-block w-[39.3056vw] mt-[2.29167vw] ml-[6.52778vw] text-[1.66vw]">
                        <p className="m-0">The hobby journey reflects on your growth and</p>
                        <p className="m-0">connect with others who share your interests.</p>
                    </div>
                </div>
                <div className="absolute mt-[5.55556vw] w-full flex justify-center">
                    <img className="w-[21.2222vw] h-[24.4097vw] object-contain relative z-10" alt=""
                         src="/scribbles@2x.png"/>
                </div>
            </div>
            <div
                className="rounded-[1.39vw] bg-dodgerblue box-border h-[47.2917vw] border-[0.208333vw] border-solid border-black w-[48%] relative left-[1%] flex justify-center">
                <img className="w-[38.3333vw] h-[49.7917vw] object-cover" alt="" src="/339shots-so@2x.png"/>
            </div>
        </div>
    );
}

export default Connect;