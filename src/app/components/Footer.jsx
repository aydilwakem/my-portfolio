export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 py-8 border-t border-base-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm opacity-70">
                    © {currentYear} Barbie Jalandoni.
                </p>
                <a 
                    href="mailto:jalandonibarbie940@gmail.com" 
                    className="text-sm font-medium hover:underline"
                >
                    jalandonibarbie940@gmail.com
                </a>
            </div>
        </footer>
    );
}