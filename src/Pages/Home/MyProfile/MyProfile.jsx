import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MyProjects from './MyProjects';

const MyProfile = () => {
	return (
		<div>
			<SectionTitle heading={'My Profile'} subHeading={'My Profile Section'} />
			<video controls>
				{/* Use the relative path to the video file */}
				<source src="nishat.mp4" type="video/mp4" />
				{/* Add additional <source> elements for other video formats if needed */}
			</video>

			<MyProjects />
		</div>
	);
};

export default MyProfile;
