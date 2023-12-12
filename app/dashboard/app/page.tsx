import HomePage from '@/src/section/home'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function Home() {
    return (
        <>
            <div style={{ minHeight: '50vh', width: '100%' }}>
                <HomePage />
            </div>
        </>
    )
}
