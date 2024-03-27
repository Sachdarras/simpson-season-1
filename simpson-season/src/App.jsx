import Avatar from "./composants/Avatar";

function App() {
	const personnages = [
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
			firstName: "Homer",
			lastName: "Simpson",
			devise: "Oh Pinaise",
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
			firstName: "Marge",
			lastName: "Simpson",
			devise: "Hooooomeeeer",
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png",
			firstName: "Bart",
			lastName: "Simpson",
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
			firstName: "Lisa",
			lastName: "Simpson",
		},
		{
			image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
			firstName: "Maggie",
			lastName: "Simpson",
		},
		{
			image: "https://www.simpsonspark.com/images/persos/contributions/petit-papa-noel-22647.jpg",
			firstName: "petit Papa Noel",
			lastName: "Simpson",
			devise: "Wouf",
		},
	];

	return (
		<>
			<h1>La famille Simpson</h1>
			{personnages.map((personnage, index) => (
				<Avatar
					key={index}
					img={personnage.image}
					firstName={personnage.firstName}
					lastName={personnage.lastName}
					devise={personnage.devise}
				/>
			))}
		</>
	);
}
export default App