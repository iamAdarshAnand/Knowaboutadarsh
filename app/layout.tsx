import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Adarsh Anand — Engineer by Logic, Creator by Instinct',description:'Portfolio of Adarsh Anand — AI/ML engineer, researcher and creator.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
