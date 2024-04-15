import { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
