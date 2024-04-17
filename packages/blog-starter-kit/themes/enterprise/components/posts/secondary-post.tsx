import Link from 'next/link';
import Image from 'next/image';
import { resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_COVER } from '../../utils/const';
import { CoverImage } from '../cover-image';
import { DateFormatter } from '../utils/date-formatter';
import { PostFragment } from '../../generated/graphql';
import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';


interface SecondaryPostProps {
	prop: PostFragment,
}

export const SecondaryPost: FC<SecondaryPostProps> = ({ prop }) => {
	return (
		<Card className='group'>
			<Link href={`/${prop.slug}`} className='sm:flex sm:items-center'>
				<CardHeader className='p-1 sm:w-1/2 sm:flex-shrink-0'>
					<Image
						src={prop.coverImage?.url || DEFAULT_COVER}
						alt={prop.title}
						width={1024}
						height={500}
						className='w-full rounded-lg border transition-opacity group-hover:opacity-90'
						priority={true}
					/>
				</CardHeader>
				<CardContent className='pt-6 space-y-4 sm:space-y-2'>
					<CardTitle className='text-2xl sm:text-lg md:max-xl:text-2xl !leading-none font-extrabold line-clamp-2'>{prop.title}</CardTitle>
					<p className="text-md sm:text-xs md:max-xl:text-md leading-snug line-clamp-3 text-muted-foreground">{prop.brief}</p>
					<DateFormatter dateString={prop.publishedAt} className='text-sm sm:text-xs' />
				</CardContent>
			</Link>
		</Card>
	)
}



// type Props = {
// 	props: PostFragment,
// 	title: string;
// 	coverImage: string;
// 	date: string;
// 	excerpt: string;
// 	slug: string;
// };

// export const SecondaryPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
// 	const postURL = `/${slug}`;

// 	return (
// 		<section className="grid items-start gap-5 md:grid-cols-2">
// 			<div className="col-span-1">
// <CoverImage
// 	title={title}
// 	src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
// 	slug={slug}
// />
// 			</div>
// 			<div className="col-span-1 flex flex-col gap-2">
// 				<h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
// 					<Link
// 						href={postURL}
// 						className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
// 					>
// 						{title}
// 					</Link>
// 				</h1>
// 				<Link href={postURL}>
// 					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
// 						{excerpt.length > 100 ? excerpt.substring(0, 100) + '…' : excerpt}
// 					</p>
// 				</Link>
// 				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
// 					<Link href={postURL}>
// 						<DateFormatter dateString={date} />
// 					</Link>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };
