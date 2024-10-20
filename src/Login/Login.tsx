import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import React, { useEffect, useState } from 'react';
import { findNearestMetro, calculateWalkingRoute, request } from '../requests/commons';
import { useDispatch, useSelector } from 'react-redux';
import { getMetroItems } from '../Reducers/metroReducer.js';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Login = () => {
	const [value, setValue] = useState(null);
	const dispatch = useDispatch();
	const { items = {}, isLoading = false } = useSelector(({ metro }) => metro);

	useEffect(() => {
		// dispatch(getMetroItems());
	}, [dispatch]);

	return (
		<div>
			<Card className="w-4/6">
				<div className="card">
					<Accordion activeIndex={0}>
						<AccordionTab header="Header I">
							<p className="m-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</AccordionTab>
						<AccordionTab header="Header II">
							<p className="m-0">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
							</p>
						</AccordionTab>
						<AccordionTab header="Header III">
							<p className="m-0">
								At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
								occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
								expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
								nihil impedit quo minus.
							</p>
						</AccordionTab>
						<AccordionTab
							header="Header IV"
							disabled
						></AccordionTab>
					</Accordion>
				</div>
			</Card>
		</div>
	);
};

export default Login;
