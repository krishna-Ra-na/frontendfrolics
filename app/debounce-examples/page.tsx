import Link from "next/link";

export default function Home() {
    const pageLinks = [
        {
            label: 'Search using Debounce',
            url: 'search-autocomplete',
        },

        {
            label: 'Infinite Scroll using Debounce',
            url: 'infinite-scroll',
        },


    ];



    return (
        <>
            <h2>Debounce Examples</h2>

            <div className="mt-10">
                <ul className="flex gap-3  justify-start">
                    {pageLinks.map((item, index) => {
                        return (
                            <li className="" key={index}>
                                <Link href={`/debounce-examples/${item.url}`} className="bg-[#292929] px-10 py-4 rounded-md hover:bg-[#ffffff0a] hover:shadow-[inset_0_0_0_0.7px_#ffffff1a]">{item.label}</Link>
                            </li>
                        )
                    })}


                </ul>
            </div>

        </>
    )
}