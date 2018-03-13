import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stripTags from 'striptags';

import {
	Article,
	Kicker,
	PlugHeading as DefaultHeading,
	Label,
	BlockLink,
	LazyProgressiveImage,
	Source,
} from '..';

const PlugLink = BlockLink.extend`
	&:focus {
		outline: none;
		box-shadow: 0 0 .3rem .1rem #08e;

		&:hover {
			box-shadow: none;
		}
	}

	&:hover {
		text-decoration: none;

		h1 {
			text-decoration:underline;
		}
	}

	&:active {
		opacity: 0.8;
	}
`;

const Description = styled.p`
	color: ${props => props.theme.colors.type};
`;

const TrysilPlug = ({
	kicker,
	title,
	subtitle,
	image,
	labels,
	url,
	placeholderUrl,
	offset,
	sources,
	ratio,
	Heading,
	headingProps,
}) => (
	<Article>
		<PlugLink href={url}>
			{kicker && <Kicker>{kicker}</Kicker>}
			{placeholderUrl &&
				<LazyProgressiveImage
					alt={title}
					src={placeholderUrl}
					offset={offset}
					fallbackSrc={image}
					ratio={ratio}
				>
					{sources.length === 0 &&
						<Source srcSet={image} />
					}
					{sources.map((source, i) =>
						<Source srcSet={source.url} media={source.media} key={`source-${i}`} />)}
				</LazyProgressiveImage>
			}
			<Heading {...headingProps}>{stripTags(title, ['strong', 'em'])}</Heading>
			{subtitle && <Description itemProp="description">{subtitle}</Description>}
			{labels &&
				labels.map(label => (
					<Label
						key={label.text}
						backgroundColor={label.backgroundColor}
						backgroundHoverShade={label.backgroundHoverShade}
						textColor={label.textColor}
					>
						{label.text}
					</Label>
				))
			}
		</PlugLink>
	</Article>
);

TrysilPlug.propTypes = {
	kicker: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string.isRequired,
	labels: PropTypes.arrayOf(PropTypes.shape({
		backgroundColor: PropTypes.string,
		backgroundHoverShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
		textColor: PropTypes.string,
		text: PropTypes.string,
	})),
	url: PropTypes.string.isRequired,
	placeholderUrl: PropTypes.string.isRequired,
	offset: PropTypes.number,
	sources: PropTypes.arrayOf(PropTypes.object),
	ratio: PropTypes.number.isRequired,
	Heading: PropTypes.func,
	headingProps: PropTypes.shape({
		skin: PropTypes.shape({
			backgroundColor: PropTypes.string,
			textColor: PropTypes.string,
			needsPadding: PropTypes.bool,
		}),
	}),
};
TrysilPlug.defaultProps = {
	kicker: '',
	title: '',
	subtitle: '',
	labels: [],
	offset: 0,
	sources: [],
	Heading: DefaultHeading,
	headingProps: {},
};

export { TrysilPlug };
