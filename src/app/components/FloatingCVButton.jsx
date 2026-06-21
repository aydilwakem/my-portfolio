// src/components/FloatingCVButton.js

export default function FloatingCVButton() {
    return (
        <a
            href="/cv.pdf"
            download="Barbie_Jalandoni_CV.pdf"
            className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 bg-base-content text-base-100 hover:scale-110 p-4 rounded-full shadow-2xl transition-transform duration-300 z-50 flex items-center justify-center"
            aria-label="Download CV"
            title="Download CV"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
            </svg>
        </a>
    );
}