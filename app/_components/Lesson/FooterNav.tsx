export default function FooterNav(){
    return(
        <div className="flex justify-between mr-[50px] ml-[50px]">
            <div className="flex items-center">
                <img src="/img/lesson/FooterNav/LeftArrow.png" alt="" className="w-[24px] h-[18px] mr-[18px]"/>
                <button className="text-[20px]">Предыдущий урок</button>
            </div>
            <div className="flex justify-between items-center">
                <button className="text-[20px]">Следующий урок</button>
                <img src="/img/lesson/FooterNav/RightArrow.png" alt="" className="w-[24px] h-[18px] ml-[18px]" />
            </div>
        </div>
    )
}