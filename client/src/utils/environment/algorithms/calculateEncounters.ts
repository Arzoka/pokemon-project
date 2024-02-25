function calculateEncounter() {
	const encounters = Math.floor( Math.random() * 100 );
	console.log( encounters );
	return encounters < 30;
}

export default calculateEncounter;
