import { FC } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { PiList } from "react-icons/pi";
import { useAppContext } from "../contexts/appContext";
import Link from "next/link";

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = () => {

	const { publication } = useAppContext();
	const hasSocialLinks = !Object.values(publication.links!).every((val) => val === '');



	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'outline'} size={'icon'}>
					<PiList size={20} />
				</Button>
			</SheetTrigger>

			<SheetContent side={"left"}>
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your account
						and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>

				<ul className="flex flex-col gap-2 text-slate-700 dark:text-white">
					<li>
						<Link
							href="/"
							className="transition-200 block truncate text-ellipsis whitespace-nowrap rounded p-2 px-3 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
						>
							Home
						</Link>
					</li>
					{publication.preferences.navbarItems.map((item) => (
						<li key={item.url}>
							<Link
								href={item.url || ''}
								className="transition-200 block truncate text-ellipsis whitespace-nowrap rounded p-2 px-3 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	)
}

export default Sidebar;