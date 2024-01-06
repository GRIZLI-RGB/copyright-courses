import About from "../_components/Landing/About";
import FAQ from "../_components/Landing/FAQ";
import Header from "../_components/Landing/Header";
import Hero from "../_components/Landing/Hero";
import StartTraining from "../_components/Landing/StartTraining";
import Tariffs from "../_components/Landing/Tariffs";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Tariffs />
			<StartTraining />
			<FAQ />
		</>
	);
}
