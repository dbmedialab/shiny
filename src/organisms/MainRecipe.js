import React from 'react';
import propTypes from 'prop-types';

import { Description        } from '../atoms/MainRecipe/Description';
import {
	Grid,
	Row,
	Col,
} from '..';
import { DetailsSection          } from '../molecules/MainRecipe/DetailsSection';
import { IngredientsSection 	 } from '../molecules/MainRecipe/IngredientsSection';
import { StepsSection       	 } from '../molecules/MainRecipe/StepsSection';
import { Related            	 } from '../molecules/MatRelated/MatRelated';
import { LargeHorizontalHeroUnit } from '../molecules/HorizontalHeroUnit';
import { AdTags                  } from './adTags';


const MainRecipe = props => (
	<Grid>
		<LargeHorizontalHeroUnit
			image={{
				src: props.recipe.images[0].largeLandscape,
				placeholder: props.recipe.images[0].largeLandscape,
			}}
			difficulty={props.recipe.difficulty}
			timeCooking={props.recipe.timeCooking}
			timeTotal={props.recipe.timeCooking}
			title={props.recipe.title}
		/>
		<Row>
			<Col md={6}>
				<DetailsSection
					preferences={props.recipe.preferences}
					allergies={props.recipe.allergies}
					author={props.recipe.authors[0]}
					raiting={props.recipe.rating}
				/>
			</Col>
			<Col md={6}>
				<Description>
					{/* eslint-disable react/no-danger */}
					<span  dangerouslySetInnerHTML={{ __html: props.recipe.description }} />
					{/* eslint-enable react/no/danger */}
				</Description>
			</Col>
		</Row>
		<Row>
			<Col md={6}>
				<IngredientsSection servings={props.recipe.servings} ingredients={props.recipe.ingredients} />
			</Col>
			<Col md={6}>
				<StepsSection steps={props.recipe.steps} />
			</Col>
		</Row>
		<AdTags tags={props.recipe.tags} />
		<Related
			entities={[
				{ slug: 'difficulty', value: props.recipe.difficulty },
				{ slug: 'activityTime', value: props.recipe.timeCooking },
				{ slug: 'totalTime', value: props.recipe.timeTotal },
			]}
			headerTitle={props.recipe.title}
		/>
	</Grid>
);
/* eslint-enable react/no/danger */

MainRecipe.propTypes = {
	recipe: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { MainRecipe };
