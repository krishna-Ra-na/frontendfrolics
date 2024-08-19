import Link from "next/link";

export default function Home() {
    const pageLinks = [
        {
            label: 'Day 1',
            url: 'day-1',
        },
        {
            label: 'Day 2',
            url: 'day-2',
        },
        {
            label: 'Day 3',
            url: 'day-3',
        },
        {
            label: 'Day 4',
            url: 'day-4',
        },
        {
            label: 'Day 5',
            url: 'day-5',
        },
        {
            label: 'Day 6',
            url: 'day-6',
        },
    ];

    return (
        <>
            <h2>Css Animation</h2>

            <div className="mt-10">
                <ul className="flex gap-3  justify-start">
                    {pageLinks.map((item, index) => {
                        return (
                            <li className="" key={index}>
                                <Link href={`/cssanimation/${item.url}`} className="bg-[#292929] px-10 py-4 rounded-md hover:bg-[#ffffff0a] hover:shadow-[inset_0_0_0_0.7px_#ffffff1a]">{item.label}</Link>
                            </li>
                        )
                    })}


                </ul>
            </div>

        </>
    )
}