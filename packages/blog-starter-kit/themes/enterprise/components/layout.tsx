import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

import { Oxanium } from 'next/font/google';

const ox = Oxanium({ subsets: ['latin'] })

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className={`${ox.className} min-h-screen bg-white dark:bg-neutral-950 pt-24`}>
				<main >{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
