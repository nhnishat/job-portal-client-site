import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import './MyProject.css';

const MyProjects = () => {
	// const { darkTheme } = useContext(AuthContext);
	// const themeClass = darkTheme ? 'dark-theme' : 'white-theme';

	return (
		<div className="rounded-lg container mx-auto" id="project">
			<div className="">
				<SectionTitle heading={'My Projects'}></SectionTitle>
			</div>
			{/* First Project */}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center ">
				<ScrollAnimation animateIn="animate__pulse">
					<div className="box-cover box rounded-lg"></div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__pulse">
					<div className="card lg:card-side  shadow-xl">
						<div className={`card-body rounded-xl `}>
							<div>
								<h1 className="text-xl font-bold text-center">
									My Projects Summary
								</h1>
								<h1 className={`text-xl font-bold text-center`}>
									Academy of Dance Art (Summer Camp Project Site)
									<Link to="https://dance-academy-client.web.app/">
										<span className="text-blue-500">Visit</span>
									</Link>
									||
									<Link to="https://github.com/nhnishat/academy-dance-art-client">
										<span className="text-blue-500">Client</span>
									</Link>
									||
									<Link to="https://github.com/nhnishat/academy-dance-art-server">
										<span className="text-blue-500">Server</span>
									</Link>
								</h1>
								<div className={'text-xl'}>
									<p>
										1. Academy of dance login website having features like
										Payment System, using sort, available seat define, Add to
										Cart, and Adding Admin, Instructor, and User routes.
									</p>
									<p>
										2. Payment system is built using the Stripe payment gateway.
									</p>
									<p>
										3. For authorization and authentication, JWT and Firebase
										are used. The website is also mobile responsive.
									</p>
								</div>
								<h3 className="text-2xl bg-slate-700 rounded-lg text-center text-white">
									<span className="font-bold">TECHNOLOGY</span>:
								</h3>
								<div className="technoloy text-center">
									<ul className="grid grid-cols-2 md:grid-cols-5  gap-4 mt-4">
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													React
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Node.js
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													MongoBD
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													CSS
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													APIs
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Axios
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Express
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													JWT
												</span>
											</a>
										</li>
										<li>
											<span
												className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
											>
												Firebase
											</span>
										</li>
										<li>
											<span
												className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
											>
												Stripe
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>

			{/* Second Project */}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 items-center ">
				<ScrollAnimation animateIn="animate__pulse">
					<div className="box-cover box1 rounded-lg"></div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__pulse">
					<div className="card lg:card-side  shadow-xl">
						<div className={`card-body rounded-xl `}>
							<div>
								<h1 className="text-xl font-bold text-center">
									My Projects Summary
								</h1>
								<h1 className="text-2xl font-bold text-center  py-2">
									Mc-Farlane-Toys-client (A website to toy car)
									<Link to="https://toy-car-client-6da3d.web.app/">
										<span className="text-blue-500">Visit</span>
									</Link>
									||
									<Link to="https://github.com/nhnishat/Mc-Farlane-Toys-client">
										<span className="text-blue-500">Client</span>
									</Link>
									||
									<Link to="https://github.com/nhnishat/Mc-Farlane-Toys-server">
										<span className="text-blue-500">Server</span>
									</Link>
								</h1>
								<div className="py-8 text-xl">
									<p>
										1. It’s a website where users can buy any type of beautiful
										toy.
									</p>
									<p className="py-2">
										2. Used MongoDB Database to store user details.
									</p>
									<p>
										3. Login and Registration system with server site and client
										site using.
									</p>
								</div>
								<h3 className="text-2xl bg-slate-700 rounded-lg text-center text-white">
									<span className="font-bold">TECHNOLOGY</span>:
								</h3>
								<div className="technoloy text-center">
									<ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													React
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Node.js
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													MongoBD
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													CSS
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													APIs
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Axios
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Express
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>

			{/* Third Project */}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
				<ScrollAnimation animateIn="animate__pulse">
					<div className="box-cover box2 rounded-lg"></div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="animate__pulse">
					<div className="card lg:card-side  shadow-xl">
						<div className={`card-body rounded-xl `}>
							<div>
								<h1 className="text-xl font-bold text-center">
									My Projects Summary
								</h1>
								<h1 className="text-xl font-bold text-center py-1">
									Chef Hunter WEB (A website for food recipes){' '}
									<Link to="https://chef-hunter-clientsite.web.app/">
										<span className="text-blue-500">Visit</span>
									</Link>
									||
									<Link to="https://github.com/nhnishat/chef-hunter-client">
										<span className="text-blue-500">Client</span>
									</Link>
									||
									<Link to="https://github.com/nhnishat/chef-hunter-sever">
										<span className="text-blue-500">Server</span>
									</Link>
								</h1>
								<div className="py-8 text-xl">
									<p>1. It’s a frontend and backend usable website.</p>
									<p className="py-1">
										2. Used JSON data to store user details and implemented
										login and registration functionality.
									</p>
								</div>
								<h3 className="text-2xl bg-slate-700 rounded-lg text-center text-white">
									<span className="font-bold">TECHNOLOGY</span>:
								</h3>
								<div className="technoloy text-center">
									<ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													React
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Node.js
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													MongoBD
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													CSS
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													RestAPIs
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Tailwind
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													Express
												</span>
											</a>
										</li>
										<li>
											<a href="">
												<span
													className={`rounded-full px-3 py-1.5 mt-5 font-bold items-center text-center border border-blue-500 hover:bg-indigo-500 hover:text-white`}
												>
													daisyUI
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default MyProjects;
