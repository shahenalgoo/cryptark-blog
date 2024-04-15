import Link from 'next/link';
import Image from 'next/image';
import { resizeImage } from '@starter-kit/utils/image';
import { useAppContext } from './contexts/appContext';
import { PublicationFragment } from '../generated/graphql';

const getPublicationLogo = (publication: PublicationFragment, isSidebar?: boolean) => {
	if (isSidebar) {
		return publication.preferences.logo; // Always display light mode logo in sidebar
	}
	return publication.preferences.darkMode?.logo || publication.preferences.logo;
}

export const PublicationLogo = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = getPublicationLogo(publication, isSidebar);

	return (
		<h1 className="relative">
			<Link
				href={'/'}
				aria-label={`${publication.title} blog home page`}
				className="flex flex-row items-center justify-center gap-3"
			>
				{PUBLICATION_LOGO ? (
					<>
						<Image
							src={PUBLICATION_LOGO}
							width={80}
							height={80}
							alt={publication.title}
							className="block w-10 shrink-0 md:w-10"
						/>
						<div className='leading-none'>
							<span className="block !leading-none text-2xl font-semibold dark:text-white md:text-xs">{publication.title}</span>
							<span className="block !leading-none text-2xl font-semibold dark:text-white md:text-2xl uppercase">Blog</span>
						</div>
					</>
				) : (
					<span
						className={`block text-2xl font-semibold ${isSidebar ? 'text-black dark:text-white' : 'text-white md:text-4xl'
							}`}
					>
						{publication.title}
					</span>
				)}
			</Link>
		</h1>
	);
};
