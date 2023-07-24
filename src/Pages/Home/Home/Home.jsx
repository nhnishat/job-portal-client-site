import BdItCompany from '../BdItCompany/BdItCompany';
import Bennar from '../Bennar/Bennar';
import Experienced from '../Experienced/Experienced';
import Fesher from '../Fesher/Fesher';
import MyBlog from '../MyBlog/MyBlog';
import MyProfile from '../MyProfile/MyProfile';
import Toggle from '../Toggole/Toggle';
import World from '../World/World';

const Home = () => {
	return (
		<>
			<Bennar />
			<Toggle />
			<Fesher />
			<Experienced />
			<MyProfile />
			<BdItCompany />
			<World />
			<MyBlog />
		</>
	);
};

export default Home;
