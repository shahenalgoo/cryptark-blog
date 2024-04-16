import { FC, useState } from "react";
import { Button } from "../ui/button";
import { PiMagnifyingGlassDuotone, PiX, PiXSquareDuotone } from "react-icons/pi";
import { Search } from "../searchbar";

interface SearchToggleProps {

}

const SearchToggle: FC<SearchToggleProps> = () => {

	const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

	return (
		<>
			<Button variant={"outline"} size={"icon"} onClick={() => setIsSearchVisible(!isSearchVisible)}>
				<PiMagnifyingGlassDuotone size={20} />
			</Button>

			{isSearchVisible &&
				<div className="fixed z-50 top-0 left-0 w-full h-16 bg-background border-b border-border flex items-center">
					<div className="container flex items-center gap-2">
						<Search />
						<Button variant={"outline"} size={"icon"} onClick={() => setIsSearchVisible(!isSearchVisible)}>
							<PiX size={20} />
						</Button>
					</div>
				</div>
			}
		</>
	)
}

export default SearchToggle;