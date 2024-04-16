import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../../utils/const';
import { CoverImage } from '../cover-image';
import { DateFormatter } from '../misc/date-formatter';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { tr } from 'date-fns/locale';
import { PostFragment } from '../../generated/graphql';
import { FC } from 'react';

interface HeroPostProps {
	prop: PostFragment,
}

export const HeroPost: FC<HeroPostProps> = ({ prop }) => {
	return (
		<Card className='group'>
			<Link href={`/${prop.slug}`}>
				<CardHeader className='p-1'>
					<Image
						src={prop.coverImage?.url || DEFAULT_COVER}
						alt={prop.title}
						width={1024}
						height={500}
						className='w-full rounded-lg border transition-opacity group-hover:opacity-90'
						priority={true}
					/>
				</CardHeader>
				<CardContent className='pt-6 space-y-4'>
					<CardTitle className='text-2xl font-extrabold'>{prop.title}</CardTitle>
					<p className="text-md leading-snug line-clamp-3 text-muted-foreground">{prop.brief}</p>
					<DateFormatter dateString={prop.publishedAt} className='text-sm' />
				</CardContent>
			</Link>
		</Card>
	)
}
