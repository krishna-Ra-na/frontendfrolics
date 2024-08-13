import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
    const pathnames = usePathname().split('/').filter((x) => x);
    // console.log(pathnames)
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
                <li className=''>
                    <Link href="/" className="text-[#0072f5] hover:text-[#78b2f4]  hover:underline">
                        Home
                    </Link>
                    {pathnames.length > 0 && <span> &gt; </span>}
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    // console.log("routeTo", routeTo)
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li key={name} className="text-gray-500">
                            {name}
                        </li>
                    ) : (
                        <li key={name}>
                            <Link href={routeTo} className="text-[#0072f5] hover:text-[#78b2f4] hover:underline">
                                {name}
                            </Link>
                            <span> &gt; </span>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
