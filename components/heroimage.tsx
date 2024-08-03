function HeroImage() {

    return (
        <div className="w-full h-auto flex flex-col  ">




            <div
                className=" text-[4.02vw] tracking-[0.1em] font-fugaz-one  flex items-center ml-[5.63vw] relative z-50">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0 outlined-text">Having</p>
          <p className="m-0 outlined-text">Fun</p>
          <p className="m-0 outlined-text">Together</p>
        </span>
            </div>
            <div className=" text-[1.39vw] leading-[150%] text-darkslategray-100 ml-[5.63vw] mt-[1.88vw] relative z-50">
                A community crafted to unite like-minded people through hosting local
                events.
            </div>

            <div className=" ml-[5.63vw] mt-[2.99vw] relative z-50">
                <img
                    className=" rounded-[0.7vw] w-[10.98vw]  object-cover"
                    alt=""
                    src="/image-60@2x.png"
                />
            </div>


            <div className="relative  top-[-11.8vw]">




                    <img
                        className="absolute float1 top-[17%] left-[25%] w-[7.05%]"
                        alt=""
                        src="/m-1.svg"
                    />

                    <img
                        className="absolute float4  top-[13%] left-[47%]  w-[2.57%]"
                        alt=""
                        src="/m-2.svg"
                    />

                    <img
                        className="absolute top-[-25%] left-[57%]  w-[6.84%] float4"
                        alt=""
                        src="/m-3.svg"
                    />

                    <img
                        className="absolute top-[7%] left-[74%]  w-[3.75%] float1"
                        alt=""
                        src="/m-4.svg"
                    />

                    <img
                        className="absolute  top-[-50%] left-[80%]  w-[6.6%] z-10 float2"
                        alt=""
                        src="/m-5.svg"
                    />

                    <img
                        className="absolute  top-[-50%] left-[84.6%]  w-[15.9%] float3"
                        alt=""
                        src="/m-6.svg"
                    />



                <img
                    className="w-[105%] h-auto  right-[2%]   "
                    alt=""
                    src="/m-bg.svg"
                />


            </div>


        </div>


    );

}


export default HeroImage;