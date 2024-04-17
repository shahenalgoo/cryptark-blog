import { format, parseISO } from 'date-fns';
import { FC, TimeHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface DateFormatterProps extends TimeHTMLAttributes<HTMLTimeElement> {
	dateString: string;
}

export const DateFormatter: FC<DateFormatterProps> = ({ dateString, className, ...props }) => {
	if (!dateString) return <></>;
	const date = parseISO(dateString);

	return (
		<time dateTime={dateString} className={cn('inline-block', className)} {...props}>{format(date, 'LLL d, yyyy')}</time>
	)
}