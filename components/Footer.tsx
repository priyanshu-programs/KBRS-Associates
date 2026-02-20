import Image from "next/image";

export default function Footer() {
    const links = {
        company: ["Home", "About"],
        services: ["Services", "Locations"],
        resources: ["Blog", "Contact"],
    };

    return (
        <footer className="bg-stone text-white py-16 md:py-24">
            <div className="container-wide flex flex-col gap-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col gap-8 lg:col-span-2">
                        <Image
                            src="https://framerusercontent.com/images/Os1D1moRONHrnpwZd1wbwDmlPfE.svg"
                            alt="KBRS Logo"
                            width={120}
                            height={32}
                            className="h-8 w-auto self-start"
                        />
                        <p className="text-stone-400 max-w-sm leading-relaxed">
                            A full-service Chartered Accountancy firm offering integrated financial, compliance, taxation, and advisory solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div className="flex flex-col gap-6">
                            {links.company.map((link) => (
                                <a key={link} href="#" className="text-stone-400 hover:text-accent-light transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            {links.services.map((link) => (
                                <a key={link} href="#" className="text-stone-400 hover:text-accent-light transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            {links.resources.map((link) => (
                                <a key={link} href="#" className="text-stone-400 hover:text-accent-light transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-stone-500 text-sm">© 2025 KBRS & Associates. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
