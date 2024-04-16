import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../../utils/const';
import { CoverImage } from '../cover-image';
import { DateFormatter } from '../date-formatter';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { tr } from 'date-fns/locale';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<Card className='group transition-colors hover:border-primary'>
			<Link href={postURL}>
				<CardHeader className='p-1'>
					<Image
						src={coverImage || DEFAULT_COVER}
						alt={title}
						width={1024}
						height={500}
						className='w-full rounded-lg border transition-opacity group-hover:opacity-90'
						// className="w-full rounded-lg border hover:opacity-90 dark:border-neutral-800"
						priority={true}
					/>

					<div className='py-2 px-4'>
						<CardTitle className='text-2xl font-bold'>{title}</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400 line-clamp-3">{excerpt}</p>
				</CardContent>
				<CardFooter>
					<DateFormatter dateString={date} />
				</CardFooter>
			</Link>
		</Card>
		// <section className="grid grid-cols-1 gap-5">
		// 	<div className="col-span-1">
		// 		<CoverImage
		// 			title={title}
		// 			src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }) || DEFAULT_COVER}
		// 			slug={slug}
		// 			priority={true}
		// 		/>
		// 	</div>
		// 	<div className="col-span-1 flex flex-col gap-2">
		// 		<h1 className="text-xl font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
		// 			<Link
		// 				href={postURL}
		// 				className="hover:text-primary-600 dark:hover:text-primary-500 leading-tight tracking-tight hover:underline"
		// 			>
		// 				{title}
		// 			</Link>
		// 		</h1>
		// 		<Link href={postURL}>
		// 			<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{excerpt}</p>
		// 		</Link>
		// 		<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
		// 			<Link href={postURL}>
		// 				<DateFormatter dateString={date} />
		// 			</Link>
		// 		</div>
		// 	</div>
		// </section>
	);
};
