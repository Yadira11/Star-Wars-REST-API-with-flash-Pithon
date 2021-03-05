const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			favorites: []
		},
		actions: {
			loadPerson: async () => {
				const url = "https://3000-crimson-pig-1afgqwxn.ws-us03.gitpod.io/Personaje";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data });
			},

			loadPlanet: async () => {
				const url = "https://3000-crimson-pig-1afgqwxn.ws-us03.gitpod.io/planetas";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
				console.log(store.favorites);
			}
		}
	};
};
export default getState;
