export interface user {
	_id: string;
	username: string;
	email: string;
	password: string;
	profile_picture: string;
	description: string;
	creation_date: Date;
	game_data: {
		level: number;
		experience: number;
		pokedollars: number;
		wins: number;
		losses: number;
	};
}
