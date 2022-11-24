import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import '../styles/global.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// @ts-ignore
		import('jquery/dist/jquery.min.js')
		// @ts-ignore
		import('bootstrap/dist/js/bootstrap.min.js') 
	}, [])
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" /> 
                <link rel="icon" type="image/x-icon" href="favicon.png"></link>
				{/* Подключаем шрифты и устанавливаем фавикон */}
			</Head>
			<Component {...pageProps} />
		</>
	)
}
