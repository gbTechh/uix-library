const $space_default = 4;

export const spacing = {
  none: 0,
  xxsm: `${$space_default * 1}px`, //4
  xsm: `${$space_default * 2}px`, //8
  sm: `${$space_default * 3}px`, //12
  md: `${$space_default * 4}px`, //16
  xmd: `${$space_default * 5}px`, //20
  gt: `${$space_default * 6}px`, //24
  xgt: `${$space_default * 7}px`, //24
  l: `${$space_default * 8}px`, //32
  xl:`${$space_default * 12}px`, //48
  xxl: `${$space_default * 24}px`, //96
};



const $fontScale = 1;
const $fontBase = 14.5;

const fontArray = {
  alpha:   			[ 48, 48, -0.3 ],
	alpha_md:   	[ 50, 50, -0.3 ],
	alpha_lg:   	[ 52, 52, -0.3 ],

	beta:    			[ 38, 38, -0.3 ],
	beta_md:    	[ 40, 40, -0.3 ],
	beta_lg:    	[ 42, 42, -0.3 ],

	gamma:   			[ 26, 26, -0.3 ],
	gamma_md:   	[ 28, 28, -0.3 ],
	gamma_lg:   	[ 30, 30, -0.3 ],

	delta:   			[($fontBase * $fontScale) + 4, 25, -0.1 ],//17.5
	delta_md:   	[($fontBase * $fontScale) + 5, 25, -0.1 ],//19.5
	delta_lg:   	[($fontBase * $fontScale) + 6, 25, -0.1 ],//20.5

	epsilon: 			[$fontBase * $fontScale, 20, 0.1 ],//14.5////////////////////////////estandar
	epsilon_md: 	[($fontBase * $fontScale) + 0.5, 21, 0.1 ],//15
	epsilon_lg: 	[($fontBase * $fontScale) + 1, 22, 0.1 ],//15.5

	zeta:    			[($fontBase * $fontScale) - 1, 15, -0.1 ],//13.5
	zeta_md:    	[($fontBase * $fontScale) - 0.5, 15.5, -0.1 ],//14
	zeta_lg:    	[($fontBase * $fontScale), 16, -0.1 ],//14.5

	eta:     			[($fontBase * $fontScale) - 2, 14.5, -0.1 ],//12.5
	eta_md:     	[($fontBase * $fontScale) - 1, 15.2, -0.1 ],//13.5
	eta_lg:     	[($fontBase * $fontScale) - 0.5, 15.5, -0.1 ],//14

	theta:   			[($fontBase * $fontScale) - 2.5, 12, null ],//12
	theta_md:   	[($fontBase * $fontScale) - 2, 14, null ],//13
	theta_lg:   	[($fontBase * $fontScale) - 1, 16, null ],//13.5
}

export const fontSize = {
  big:      fontArray.alpha,
  h1:				fontArray.beta,
	h2:				fontArray.gamma,
	h3:				fontArray.delta,
	h4:				fontArray.delta,
	base:			fontArray.epsilon,
	sm:				fontArray.zeta,
	xs:				fontArray.eta,
	xxs:			fontArray.theta,
	bquote: 		fontArray.epsilon,
	figcap: 		fontArray.theta,
	code: 			fontArray.eta,
	pre: 			fontArray.eta,
	table: 			fontArray.eta,
  // ↓ Tablet (set to null if font size won't change on desktop)
  big_tablet:   fontArray.alpha_md,
	h1_tablet:		fontArray.beta_md,
	h2_tablet:		fontArray.gamma_md,
	h3_tablet:		fontArray.delta_md,
	h4_tablet:		fontArray.delta_md,
	base_tablet:	fontArray.epsilon_md,
	sm_tablet:		fontArray.zeta_md,
	xs_tablet:		fontArray.eta_md,
	xxs_tablet:	  fontArray.theta_md,
	bquote_tablet: fontArray.theta_md,
	figcap_tablet: fontArray.theta_md,
	code_tablet:	 fontArray.eta_md,
	pre_tablet:	   fontArray.eta_md,
	table_tablet:  fontArray.eta_md,
	// ↓ Desktop (set to null if font size won't change on desktop)
	big_desktop:   fontArray.alpha_lg,
	h1_desktop:		fontArray.beta_lg,
	h2_desktop:		fontArray.gamma_lg,
	h3_desktop:		fontArray.delta_lg,
	h4_desktop:		fontArray.delta_lg,
	base_desktop:	fontArray.epsilon_lg,
	sm_desktop:		fontArray.zeta_lg,
	xs_desktop:		fontArray.eta_lg,
	xxs_desktop:	  fontArray.theta_lg,
	bquote_desktop: fontArray.theta_lg,
	figcap_desktop: fontArray.theta_lg,
	code_desktop:	 fontArray.eta_lg,
	pre_desktop:	   fontArray.eta_lg,
	table_desktop:  fontArray.eta_lg,
}

export const space = $space_default;