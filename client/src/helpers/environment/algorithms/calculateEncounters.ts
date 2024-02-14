function calculateEncounter() {
	const encounters = Math.floor(Math.random() * 100);
	return encounters < 30;
}

export default calculateEncounter;
