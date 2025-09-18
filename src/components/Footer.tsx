import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-0 md:items-start md:justify-between
        bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={36}
                        height={36}
                    />

                    <p className="hidden md:block text-md font-medium tracking-wider text-white">
                        TREND MAMA
                    </p>
                </Link>
                <p className="text-sm text-gray-400">&copy; 2025 Trend Mama</p>
                <p className="text-sm text-gray-400">All rights reserved</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="https://www.instagram.com/_nafis_bin/">Contact</Link>
                <Link href="https://x.com/TokyaRamen">Terms of Service</Link>
                <Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Privacy Policy</Link>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">All Products</Link>
                <Link href="https://www.instagram.com/_nafis_bin/">New Arrivals</Link>
                <Link href="https://x.com/TokyaRamen">Best Sellers</Link>
                <Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Sale</Link>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">About</Link>
                <Link href="https://www.instagram.com/_nafis_bin/">Contact</Link>
                <Link href="https://x.com/TokyaRamen">Blog</Link>
                <Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Affiliate Program</Link>
            </div>


        </div>
    )
}

export default Footer