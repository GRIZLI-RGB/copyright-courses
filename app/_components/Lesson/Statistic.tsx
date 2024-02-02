import Image from "next/image";

interface StatisticProps{
    calendar_img:string;
    date: string;

    yellow_star: string;
    gray_star: string;

    time: string;

    value_of_yellow_stars: number;

}

export default function Statistic({calendar_img, date, yellow_star, gray_star, time, value_of_yellow_stars }: StatisticProps) {

    let stars = [gray_star, gray_star, gray_star];

    for (let index = 0; index < value_of_yellow_stars; index++) {
        stars[index] = yellow_star;
    }

    return (
        <div className="flex flex-col ml-[50px] mr-[50px] mt-[30px]">

            <div className="flex">

                 {/* Блок даты */}
                <div className="flex items-center">
                    <img src={calendar_img} alt="" />
                    <span className="ml-[6px] text-[#353535] font-medium">{date}</span>
                </div>

                {/* Блок Звезд */}
                <div className="flex items-center ml-[45px]">
                    <span>Сложность изучения:</span>

                    {/* Сами звездочки */}
                    <div className="flex">

                        {
                            stars.map((star) => <img src={star} alt="" className="ml-[6px]"
                            />)
                        }

                    </div>
                </div>

                {/* Время */}
                <div className="flex items-center ml-[45px]">
                    <span>Время прочтения:</span>
                    <span className="ml-[6px]"><b>{time}</b></span>
                </div>

            </div>
        </div>
    )
}