import './globals.css';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='notFound'>
            <h1>PAGE NOT FOUND</h1>
            <p>Unfortunately, we can't bring you what you were looking for this time.
                Perhaps you'd like to see some of our latest product instead?
            </p>
            <div className='btns'>
                <Link href="/">Go to Home</Link>
                <Link href="/Products">View products</Link>
            </div>
        </div>
    )
}
