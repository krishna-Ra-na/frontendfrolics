import Link from "next/link";

export default function Home() {
    const pageLinks = [
        {
            label: 'Sum',
            url: 'sum',
        },
        {
            label: 'Flat',
            url: 'flat',
        },
        {
            label: 'Validate Brackets',
            url: 'validatebrackets',
        },
        {
            label: 'Throttle',
            url: 'throttle',
        },
        {
            label: 'Debounce',
            url: 'debounce',
        },
        {
            label: 'Is anagram',
            url: 'isanagram',
        },
        {
            label: 'Find largest',
            url: 'findlargest',
        },
        {
            label: 'Expenditure Analysis',
            url: 'expenditureanalysis',
        },
        {
            label: 'Is Palindrome',
            url: 'palindrome',
        },
        {
            label: 'Count Vowels',
            url: 'countvowels',
        },

    ];



    return (
        <>
            <h2>Js Problems</h2>

            <div className="mt-10">
                <ul className="flex gap-5  justify-start flex-wrap">
                    {pageLinks.map((item, index) => {
                        return (
                            <li className="flex" key={index}>
                                <Link href={`/jsproblems/${item.url}`} className="bg-[#292929] px-10 py-4 rounded-md hover:bg-[#ffffff0a] hover:shadow-[inset_0_0_0_0.7px_#ffffff1a]">{item.label}</Link>
                            </li>
                        )
                    })}


                </ul>
            </div>

        </>
    )
}