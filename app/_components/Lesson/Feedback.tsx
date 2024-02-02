export default function Feedback(){
    return(
        <div className="flex flex-col items-center mt-[100px] mb-[100px]">
            <span className="text-[32px] leading-[43px] font-bold">Оцените пройденный урок</span>
            <div className="flex mt-[25px]">
                <img src="/img/lesson/Feedback/good.png" alt="" />
                <img src="/img/lesson/Feedback/middle.png" alt="" className="mr-[60px] ml-[60px]"/>
                <img src="/img/lesson/Feedback/bad.png" alt="" />
            </div>
        </div>
    )
}