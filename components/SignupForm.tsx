import React, { useState } from 'react';
import wizardStyles from '../styles/Wizard.module.css';
import Step1 from './Wizard/Step1';
import Step2 from './Wizard/Step2';
import Step3 from './Wizard/Step3';

const SignupForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [navDirection, setNavDirection] = useState('next');

	const steps = [Step1, Step2, Step3];

	const _nextStep = () => {
		setNavDirection('next');

		let step = currentStep >= 2 ? 3 : currentStep + 1;
		setCurrentStep(step);
	};

	const _prevStep = () => {
		setNavDirection('prev');

		let step = currentStep === 1 ? 1 : currentStep - 1;
		setCurrentStep(step);
	};

	return (
		<div className={wizardStyles.stepContainer}>
			{React.createElement(steps[currentStep - 1], { navDirection })}
			<div>
				{(() => {
					switch (currentStep) {
						case 1:
							return <button onClick={() => _nextStep()}>Next</button>;
						case 2:
							return (
								<>
									<button onClick={() => _prevStep()}>Back</button>
									<button onClick={() => _nextStep()}>Next</button>
								</>
							);
						case 3:
							return <button onClick={() => _prevStep()}>Back</button>;
						default:
							return <button onClick={() => _nextStep()}>Next</button>;
					}
				})()}
				<p>{currentStep}</p>
				<p>{navDirection}</p>
			</div>
		</div>
	);
};

export default SignupForm;
