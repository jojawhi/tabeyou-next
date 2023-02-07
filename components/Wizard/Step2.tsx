import wizardStyles from '../../styles/Wizard.module.css';

const Step2 = ({ navDirection }: { navDirection: string }) => {
	return (
		<div
			style={{ height: 600, width: 400, background: 'seagreen' }}
			className={
				navDirection === 'prev'
					? `${wizardStyles.slideInFromLeft}`
					: `${wizardStyles.slideInFromRight}`
			}
		>
			<p>Step 2</p>
			<p>{`Step 2 direction: ${navDirection}`}</p>
		</div>
	);
};

export default Step2;
