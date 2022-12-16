import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'

export function Banner() {
    return (
        <div className="relative bg-indigo-600">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                <div className="pr-16 sm:px-16 sm:text-center">
                    <p className="font-medium text-white">
                        <span className="hidden md:inline">Recommended by Maquette Advisors</span>
                        <span className="block sm:ml-2 sm:inline-block">
                            <a href="#" className="font-bold text-white underline">
                                Learn more
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}