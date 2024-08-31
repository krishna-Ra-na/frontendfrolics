// @ts-nocheck
import './style.css';

export default function Day7() {

    return (
        <>
            <div className="flex flex-col  justify-center min-h-[600px] mt-8">
                <div className="flex h-[500px] items-center justify-center -mt-8 relative bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20 ">
                    <div className="wrapper">
                        <div className="header">
                            <div className="icon"></div>
                            <p>
                                <b>CSS Animation.</b> And <br />
                                It is very fun.
                            </p>
                        </div>
                        <div className="animation-section">
                            <div className="circles circle-1" style={{ '--i': 1 }}></div>
                            <div className="circles circle-2" style={{ '--i': 2 }}></div>
                            <div className="circles circle-3" style={{ '--i': 3 }}></div>
                            <div className="circles circle-4" style={{ '--i': 4 }}></div>
                            <div className="circles circle-5" style={{ '--i': 5 }}></div>
                            <div className="circles circle-6" style={{ '--i': 6 }}></div>
                            <div className="circles circle-7" style={{ '--i': 7 }}></div>

                            <div className="dots" style={{ '--i': '0deg' }}></div>
                            <div className="dots dots-2" style={{ '--i': '-40deg' }}></div>
                        </div>

                        <div className="background-gradient"></div>
                    </div>
                </div>
            </div>
        </>
    )
}