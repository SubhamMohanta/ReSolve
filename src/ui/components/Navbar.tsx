

import React from 'react'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/ui/components/Button";


const Navbar = () => {
    const router = useRouter();
    const [src, setSrc] = useState("/Vector-default.svg");

    return (
        <>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start fixed top-0 left-0 right-0 bg-white opacity-100">
                <div className="flex w-full flex-col items-start relative">
                    <div className="flex w-full items-center justify-between px-8 py-6">
                        <button className="flex items-center gap-0.25" onMouseEnter={() => setSrc("/Vector-active.svg")} onMouseLeave={() => setSrc("/Vector-default.svg")} onClick={() => router.push("/")}>
                            <span className="text-xl font-semibold font-heading-1 text-neutral-950">
                                Re
                            </span>
                            <span>
                                <Image src={src} width={16} height={16} alt="S logo" />
                            </span>
                            <span className="text-xl font-semibold font-heading-1 text-neutral-950">
                                olve
                            </span>
                        </button>
                        <div className="flex items-center gap-8">
                            <span className="text-body-bold font-body-bold text-neutral-950">
                                About
                            </span>
                            <span className="text-body font-body text-neutral-950">
                                FAQs
                            </span>
                            <span className="text-body font-body text-neutral-950">
                                groups
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="brand-tertiary"
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            >
                                Sign up
                            </Button>
                            <Button
                                variant="brand-primary"
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            >
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar