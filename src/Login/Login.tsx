import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import React, { useState } from 'react';

const Login = () => {
	const [value, setValue] = useState(null);

	return (
		<div>
			<div className="card mb-5 ">
				<Card title="Simple Card">
					<p className="m-0">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
						repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
						quam perferendis esse, cupiditate neque quas!
					</p>
					<Rating
						value={value}
						onChange={e => setValue(e.value)}
						cancel={false}
					/>
					<Button
						className="p-button-rounded p-button-info"
						label="Check"
						icon="pi pi-check"
					/>
					<Button label="Submit" />
					<InputText></InputText>
				</Card>
			</div>
		</div>
	);
};

export default Login;
