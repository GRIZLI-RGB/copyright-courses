"use client";

import { useEffect, useState } from "react";
import About from "../_components/Landing/About";
import FAQ from "../_components/Landing/FAQ";
import Header from "../_components/Landing/Header";
import Hero from "../_components/Landing/Hero";
import StartTraining from "../_components/Landing/StartTraining";
import Tariffs from "../_components/Landing/Tariffs";
import { TSettings } from "../types";
import { getSettings } from "../_services/api.service";

export default function Home() {
	const [settings, setSettings] = useState<TSettings>();

	useEffect(() => {
		getSettings().then(res => setSettings(res));
	}, []);

	if (settings) {
        return (
            <>
                <Header />
                <Hero />
                <About />
                <Tariffs data={settings.landing.tariffs} />
                <StartTraining />
                <FAQ />
            </>
        );
    }
}
