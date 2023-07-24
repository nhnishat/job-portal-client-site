const About = () => {
	return (
		<div className="grid grid-cols-1">
			<div className="card w-full bg-base-100 shadow-xl my-36">
				<div className="card-body">
					<h2 className="card-title text-center">This About Page</h2>
					<p>
						The webpage described is a Job Portal site that aims to connect job
						seekers with potential employers. It provides a platform for users
						to browse and apply for various tech job opportunities. The sites
						frontend will be built using HTML5, CSS3, and JavaScript, with
						React.js used to create the user interface and React Router for
						handling navigation. Here is a breakdown of the main features and
						sections of the Job Portal site:
					</p>
					<p>
						<h2>Home Page:</h2>
						<p>
							The home page will have a navigation bar with four routes: Home,
							About, Contact Us, and Sign In / Sign Out. A toggle button will
							allow users to switch between Job Seeker and Job Poster roles,
							with animations applied using a React animation library. The page
							will have two sections: Fresher Jobs and Experienced Jobs, each
							featuring the top six tech job suggestions with Apply buttons.
							Another section will highlight the top three IT companies in
							Bangladesh and worldwide, with a View Details button for each. A
							blog section will provide MERN Stack Technologies Interview
							Questions & Answers. The page will have a footer with essential
							links and information.
						</p>
					</p>
					<p>My Profile Section:</p>
					<p>
						The My Profile section will allow users to showcase their video
						resume and list their projects.
					</p>
					<p>Authentication</p>
					<p>
						Firebase will be used for user authentication, enabling users to
						sign up and log in securely.
					</p>
					<p>
						The backend of the project will be developed using Node.js and
						Express.js, providing the necessary server-side functionality.
						MongoDB will be utilized to store user data and job-related
						information securely. Its important to note that the design and
						templates are meant to serve as inspiration, and the project should
						aim to create a unique and original design for the Job Portal site.
						Proper security measures should be implemented to protect user data
						and ensure a safe user experience. The site should be thoroughly
						tested on various devices and browsers to ensure smooth
						functionality and responsiveness. Overall, the Job Portal site aims
						to offer a comprehensive platform for job seekers and employers to
						connect and find suitable tech job opportunities.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
