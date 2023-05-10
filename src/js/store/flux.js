const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://hp-api.onrender.com/api";
	return {
		store: {
			CharacterData: [],
			favorites: [],
			SpellData: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
				console.log(store.favorites);
			},

			addCharacters: () => {
				fetch(apiUrl+"/characters")
					.then((response) => response.json())
					.then (data =>setStore({CharacterData:data}))
					.catch((error) => console.log(error))
				
			},
			addSpells: () => {
				fetch(apiUrl+"/spells")
					.then((response) => response.json())
					.then (data =>setStore({SpellData:data}))
					.catch((error) => console.log(error))
				
			},


			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
