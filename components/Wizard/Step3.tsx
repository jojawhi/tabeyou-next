import wizardStyles from '../../styles/Wizard.module.css';

const Step3 = ({ navDirection }: { navDirection: string }) => {
	return (
		<div
			style={{ height: 600, width: 400, background: 'lavender' }}
			className={
				navDirection === 'prev'
					? `${wizardStyles.slideInFromLeft}`
					: `${wizardStyles.slideInFromRight}`
			}
		>
			<p>Step 3</p>
			<p>{`Step 3 direction: ${navDirection}`}</p>
		</div>
	);
};

export default Step3;
