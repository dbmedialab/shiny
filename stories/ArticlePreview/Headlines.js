import React from 'react';

import SiteSelection from '../SiteSelection';
import ArticlePreview from '../../src/molecules/ArticlePreview';

export default () => (
	<SiteSelection>
		<div style={{ margin: '0 auto', maxWidth: '900px' }}>
			<h1>20.1 - Headlines!</h1>
			<ArticlePreview
				id={1}
				link="#"
				title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
			/>
			<ArticlePreview
				id={2}
				link="#"
				title="Person funnet død i vannet i Skien - 62-åring savnet i samme område"
			/>
		</div>
	</SiteSelection>
);
