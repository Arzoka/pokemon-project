import OnboardingStack from './Stacks/OnboardingStack.tsx';
import WildStack from './Stacks/WildStack.tsx';
import { useContext } from 'react';
import { StateContext } from './contexts/StateContext.tsx';

const EntryPoint = () => {
	const { state } = useContext( StateContext );

	if ( !state || state === 'onboarding' ) { return <OnboardingStack />;}

	if ( state === 'wild-area' ) { return <WildStack />;}

	return <OnboardingStack />;
};

export default EntryPoint;
