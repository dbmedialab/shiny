/* eslint-disable max-len */
import React from 'react';

import { Row, Col, Grid } from '../..';
import { FooterMat } from '../../atoms/footerMat';

const Footer = props => (
	<FooterMat>
		<Grid>
			<Row>
				<Col xs={12} md={3}>
					<p>Oppskrift.no</p>
					<p>
						<img className="Aller-logo" src="allers-logo.png" width={69} height={19} alt="" />
						<svg width="45px" height="43" viewBox="0 0 234 211" version="1.1">
							<title>Artboard 34</title>
							<desc>Created with Sketch.</desc>
							<g id="GUIDELINES" stroke="none"  fill="none">
								<g>
									<g id="logo_192192" transform="translate(19.000000, 10.000000)">
										<circle id="Oval-69" fill="#000000" cx="96" cy="96" r="96" />
										<path d="M59.3003613,51.0715266 C59.8901864,51.0715266 60.3731768,51.553588 60.3731768,52.1413788 L60.3731768,134.199976 C60.3731768,134.787767 59.8901864,135.269423 59.3003613,135.269423 L46.3619871,135.269423 C45.772162,135.269423 45.2895778,134.787767 45.2895778,134.199976 L45.2895778,52.1413788 C45.2895778,51.553588 45.772162,51.0715266 46.3619871,51.0715266 L59.3003613,51.0715266" id="Fill-1" fill="#FFFFFF" />
										<path d="M61.5191111,105.619406 C61.1921075,105.128838 61.2396347,104.364426 61.6251333,103.918418 L78.269819,84.7048285 C79.2999818,83.5320826 80.5539695,82.8616526 81.3501521,82.5424389 C82.0898708,82.2459103 83.3722936,81.8019277 84.9898442,81.8019277 L97.7653259,81.8019277 C98.3559635,81.8019277 98.5200746,82.1632712 98.1297014,82.6048233 L78.541171,104.782888 L98.6732179,134.409409 C99.0245944,134.882559 98.8292047,135.269423 98.2389734,135.269423 L87.6984901,135.269423 C85.2526657,135.269423 83.6192727,134.827061 82.2434203,134.183367 C80.9207822,133.562764 79.5550852,132.48805 78.2495082,130.643254 L61.5191111,105.619406" id="Fill-2" fill="#FFFFFF" />
										<path d="M113.840903,51.0715266 C114.431135,51.0715266 114.913719,51.553588 114.913719,52.1413788 L114.913719,134.199976 C114.913719,134.787767 114.431135,135.269423 113.840903,135.269423 L100.902936,135.269423 C100.312704,135.269423 99.8297138,134.787767 99.8297138,134.199976 L99.8297138,52.1413788 C99.8297138,51.553588 100.312704,51.0715266 100.902936,51.0715266 L113.840903,51.0715266" id="Fill-3" fill="#FFFFFF" />
										<path d="M116.059653,105.619406 C115.733056,105.128838 115.780177,104.364426 116.165676,103.918418 L132.810767,84.7048285 C133.840524,83.5320826 135.094918,82.8616526 135.890694,82.5424389 C136.630819,82.2459103 137.912836,81.8019277 139.530793,81.8019277 L152.306274,81.8019277 C152.896912,81.8019277 153.060211,82.1632712 152.669837,82.6048233 L133.082119,104.782888 L153.213354,134.409409 C153.56473,134.882559 153.369747,135.269423 152.779516,135.269423 L142.239438,135.269423 C139.793208,135.269423 138.159815,134.827061 136.783963,134.183367 C135.461324,133.562764 134.096034,132.48805 132.79005,130.643254 L116.059653,105.619406" id="Fill-4" fill="#FFFFFF" />
									</g>
								</g>
							</g>
						</svg>
					</p>
					<p>
						<img src="Dagbladet_logo.png" width={87} height={26} alt="" />
					</p>
				</Col>
				<Col xs={12} md={3}>
					<p>Postadresse:</p>
					<p>Boks 1184 Sentrum, 0107 Oslo</p>
					<br />
					<p>Besøksadresse: </p>
					<p>Karvesvingen 1, 0579 Oslo</p>
					<p>Sentralbord: 24 00 10 00</p>
				</Col>
				<Col xs={12} md={3}>
					<p>Ansvarlig redaktør:</p>
					<p>Utgiverselskap</p>
					<p>Aller Media AS</p>
				</Col>
				<Col xs={12} md={3}>
					<p>Annonseinfo</p>
					<p>Om informasjonskapsler</p>
					<p>Redaksjonen</p>
					<p>Personvern</p>
				</Col>
			</Row>
		</Grid>
	</FooterMat>
);

export default Footer;
