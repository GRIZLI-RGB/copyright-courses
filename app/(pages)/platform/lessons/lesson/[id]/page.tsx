import Block from "@/app/_components/Platform/Block";
import Estimation from "@/app/_components/Platform/Lesson/Estimation";
import Heading from "@/app/_components/Platform/Lesson/Heading";
import Homework from "@/app/_components/Platform/Lesson/Homework";
import Picture from "@/app/_components/Platform/Lesson/Picture";
import Info from "@/app/_components/Platform/Lesson/Info";
import List from "@/app/_components/Platform/Lesson/List";
import Navigation from "@/app/_components/Platform/Lesson/Navigation";
import Preview from "@/app/_components/Platform/Lesson/Preview";
import Test from "@/app/_components/Platform/Lesson/Test";
import Text from "@/app/_components/Platform/Lesson/Text";
import Caution from "@/app/_components/Platform/Lesson/Caution";
import Extra from "@/app/_components/Platform/Lesson/Extra";

export default function PlatformLessonsLessonPage() {
	return (
		<section className="max-w-[1350px] ml-auto">
			<Block>
				<Preview image_url="/img/platform/lesson/preview.jpg" title="#1 Инструменты современного копирайтера" />
				<Info date_created={new Date()} difficult={1} reading_time="3-5 мин" />
				<Text>
					Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании
					новых предложений. Не следует, однако, забывать о том, что реализация намеченного плана развития
					способствует подготовке и реализации системы масштабного изменения ряда параметров. Соображения
					высшего порядка, а также начало повседневной работы по формированию позиции в значительной степени
					обуславливает создание направлений прогрессивного развития. Соображения высшего порядка, а также
					повышение уровня гражданского сознания играет важную роль в формировании всесторонне
					сбалансированных нововведений? Разнообразный и богатый опыт выбранный нами инновационный путь
					создаёт предпосылки качественно новых шагов для соответствующих условий активизации.
				</Text>
				<Heading variant="h2">Какие существуют программы?</Heading>
				<Picture url="/img/platform/lesson/1.png" opinion="Рисунок 1. Программист якобы «работает»" />
				<Text>
					Разнообразный и богатый опыт повышение уровня гражданского сознания способствует подготовке и
					реализации ключевых компонентов планируемого обновления? Таким образом, постоянный количественный
					рост и сфера нашей активности играет важную роль в формировании дальнейших направлений развитая
					системы массового участия! Не следует, однако, забывать о том, что рамки и место обучения кадров
					влечет за собой процесс <span className="lesson-bold">внедрения</span> и{" "}
					<span className="lesson-bold">модернизации</span> системы обучения кадров, соответствующей насущным
					потребностям!
				</Text>
				<Text>
					Повседневная практика показывает, что сложившаяся структура организации обеспечивает широкому кругу
					специалистов участие в формировании ключевых компонентов планируемого обновления! Значимость этих
					проблем настолько очевидна, что реализация намеченного плана развития влечет за собой процесс
					внедрения и модернизации соответствующих условий активизации? Соображения высшего порядка, а также
					социально-экономическое развитие способствует повышению актуальности дальнейших направлений развитая
					системы массового участия! А вот и{" "}
					<a href="#" className="lesson-link">
						ссылка
					</a>{" "}
					— пользуйтесь.
				</Text>
				<Heading variant="h2">Чем они помогают?</Heading>
				<Text>
					Разнообразный и богатый опыт постоянное информационно-техническое обеспечение нашей деятельности
					напрямую зависит от позиций, занимаемых участниками в отношении поставленных задач. Таким образом,
					начало повседневной работы по формированию позиции позволяет выполнить важнейшие задания по
					разработке экономической целесообразности принимаемых решений! Повседневная практика показывает, что
					консультация с профессионалами из IT играет важную роль в формировании модели развития?
				</Text>
				<Caution>
					Равным образом сложившаяся структура организации позволяет выполнить важнейшие задания по разработке
					направлений прогрессивного развития? Не следует, однако, забывать о том, что консультация с
					профессионалами из IT напрямую зависит от форм воздействия. Таким образом, реализация намеченного
					плана развития требует от нас системного анализа существующих финансовых и административных условий!
				</Caution>
				<Heading variant="h3">Плюсы и минусы таких программ</Heading>
				<Text>
					Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей
					деятельности играет важную роль в формировании системы обучения кадров, соответствующей насущным
					потребностям. Повседневная практика показывает, что постоянный количественный рост и сфера нашей
					активности играет важную роль в формировании соответствующих условий активизации. Задача
					организации, в особенности же социально-экономическое развитие создаёт предпосылки качественно новых
					шагов для экономической целесообразности принимаемых решений.
				</Text>
				<Heading variant="h2">Выводы</Heading>
				<Text>Краткий экскурс по всему прочитанному:</Text>
				<List variant="circles" items={["Пункт 1", "Пункт 2", "Пункт 3"]} />
				<Extra
					homework_items={["Изучите устройство Microsoft Docs", "Создайте свою операционную систему"]}
					test_data={[
						{
							id: 1,
							question: "Зачем люди какают, если можно не какать? Как люди какают в космосе?",
							answers: ["Журавль", "Тигр", "Лев"],
							right_answer: "Тигр",
						},
						{
							id: 2,
							question: "Зачем люди какают, если можно не какать? Как люди какают в космосе?",
							answers: ["Журавль", "Чихуахуа", "Сова"],
							right_answer: "Журавль",
						},
						{
							id: 3,
							question: "Зачем люди какают, если можно не какать? Как люди какают в космосе?",
							answers: ["Лемур", "Анаконда", "Лев"],
							right_answer: "Лев",
						},
					]}
				/>
				<Estimation />
				<Navigation prev_link="/lesson/1" next_link="/lesson/2" />
			</Block>
		</section>
	);
}
