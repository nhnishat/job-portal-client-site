import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const World = () => {
	const [isDbJobs, setIsBdJobs] = useState([]);

	useEffect(() => {
		fetch('https://job-portals-sever.vercel.app/world')
			.then((res) => res.json())
			.then((data) => {
				setIsBdJobs(data);
			});
	}, []);

	return (
		<>
			<SectionTitle
				heading={'Worldwide IT Companies '}
				subHeading={'Worldwide Top IT Companies '}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{isDbJobs.map((company) => (
					<div
						key={company._id}
						className="card w-96 bg-base-100 shadow-xl mb-36"
					>
						<div className="card-body">
							<h2 className="card-title">
								<span className="font-bold">Name: </span> {company.name}
							</h2>
							<p className="text-base">
								<span className="font-bold">Email: </span>
								{company.email}
							</p>
							<p className="mb-2">
								{' '}
								<span className="font-bold">Location:</span>
								{company.location}
							</p>
							<div className="card-actions justify-end">
								<Link to={`/details/${company._id}`}>
									<button className="btn btn-neutral">See More</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default World;
