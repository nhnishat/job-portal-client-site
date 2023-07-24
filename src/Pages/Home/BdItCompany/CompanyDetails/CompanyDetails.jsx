import { useLoaderData } from 'react-router-dom';

const CompanyDetails = () => {
	const company = useLoaderData();

	return (
		<div className="grid grid-cols-1">
			<div className="card w-full bg-base-100 shadow-xl my-36">
				<div className="card-body">
					<h2 className="card-title">Name: {company.name}</h2>
					<p>
						<span className="font-bold text-xl space-y-3">Location: </span>
						{company.location}
					</p>
					<p>
						<span className="font-bold text-xl space-y-3">Email: </span>
						{company.email}
					</p>
					<p>
						<span className="font-bold text-xl space-y-3">website: </span>
						{company.website}
					</p>
					<p>
						<span className="font-bold text-xl space-y-3">
							Industry Recognition:{' '}
						</span>
						{company.Industry_Recognition}
					</p>
					<p>
						<span className="font-bold text-xl space-y-3">Clients: </span>
						{company.clients}
					</p>
					<p>
						<span className="font-bold text-xl space-y-3">Description: </span>
						{company.overview}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CompanyDetails;
