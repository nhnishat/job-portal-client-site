import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const MyBlog = () => {
	return (
		<div className="grid grid-cols-1">
			<SectionTitle heading={'My Blog'} subHeading={'My Blog Section'} />
			<div className="card w-full bg-base-100 shadow-xl mb-36">
				<div className="card-body">
					<h2 className="text-center text-2xl font-semibold">
						Question And Answer
					</h2>
					<p>
						<h1>How do you declare variables in JavaScript?</h1>
						<p>
							Ans: I declared variables in var,let,and const. where var and let
							are reassignment and const just read only.
						</p>
					</p>
					<p>
						<h1> What is javascript?</h1>
						<p>
							Ans: javascript is a scripting language.Its a high level
							interpreted programming language that enables to dynamically
							create content and update and interact..
						</p>
					</p>
					<p>
						<h1>What are the data types in JavaScript?</h1>
						<p>
							Ans: JavaScript has seven primitive data types: string, number,
							boolean, null, undefined, symbol, and bigInt. Additionally, it has
							one complex data type, which is object.
						</p>
					</p>
					<p>
						<h1>What are callback functions in JavaScript?</h1>
						<p>
							Ans: A callback is a function passed as an argument to another
							function and is executed at a later time or when a certain event
							occurs. They are commonly used in asynchronous programming to
							handle responses or actions.
						</p>
					</p>
					<p>
						<h1>How do you declare variables in JavaScript?</h1>
						<p>
							Ans: I declared variables in var,let,and const. where var and let
							are reassignment and const just read only.
						</p>
					</p>
					<p>
						<h1>What is the significance of virtual DOM in React?</h1>
						<p>
							The virtual DOM is a lightweight copy of the actual DOM. Every
							object that exists in the original DOM. Explain the concept of
							React components.? Ans: React components are
							self-contained,reusable UI that can be composed together to build
							complex user interfaces. They can be either functional components
							or class components .
						</p>
					</p>
					<p>
						<h1>What is the state?</h1>
						<p>
							Ans: State is a JavaScript object. It allows React components to
							manage and update their own data independently.
						</p>
					</p>
					<p>
						<h1>What are React hooks?</h1>
						<p>
							Ans: React hooks are functions introduced in React that allow
							functional components. Hooks can be stateful and can manage
							side-effects. Some popular hooks include useState, useEffect, and
							useContext.
						</p>
					</p>
					<p>
						<h1>What is Node.js?</h1>
						<p>
							Ans: Node.js is a JavaScript runtime environment that allows you
							to execute JavaScript code on the server.
						</p>
					</p>
					<p>
						<h1>What is express js in node.js? </h1>
						<p>Ans: Express.js is a web application framework for Node.js.</p>
					</p>
					<p>
						<h1>What is mongoDb?</h1>
						<p>
							Ans: Mongodb is a NOSQL database system that stores json-like
							documents.
						</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MyBlog;
