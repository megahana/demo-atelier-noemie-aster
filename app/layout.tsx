import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Atelier Noémie Aster — Pièces silencieuses',description:'Atelier de peinture. Nantes. Une série. Un scroll. Une seule œuvre à la fois.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
