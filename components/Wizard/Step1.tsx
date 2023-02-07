import wizardStyles from '../../styles/Wizard.module.css';

const Step1 = ({ navDirection }: { navDirection: string }) => {
	return (
		<div
			style={{ height: 600, width: 400, background: 'lightblue' }}
			className={
				navDirection === 'prev'
					? `${wizardStyles.slideInFromLeft}`
					: `${wizardStyles.slideInFromRight}`
			}
		>
			<p>Step 1</p>
			<p>{`Step 1 direction: ${navDirection}`}</p>
		</div>
	);
};

export default Step1;
