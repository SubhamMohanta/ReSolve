"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { OAuthSocialButton } from "@/ui/components/OAuthSocialButton";
import { TextField } from "@/ui/components/TextField";
import { Button } from "@/ui/components/Button";
import { LinkButton } from "@/ui/components/LinkButton";

function SecureLogin() {
    const router = useRouter();

    // State management for inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex h-full w-full flex-col items-start bg-default-background">
            <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-8 px-4 self-stretch">
                <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-md border border-solid border-neutral-border bg-white px-12 py-12">
                    <img
                        className="h-8 flex-none object-cover"
                        src="https://res.cloudinary.com/dzgttn1mr/image/upload/v1740730365/Vector_vcvp3r.svg"
                        alt="Logo"
                    />
                    <div className="flex w-full flex-col items-center justify-center gap-2">
                        <span className="text-heading-2 font-heading-2 text-default-font">
                            Create an account
                        </span>
                        <span className="text-body font-body text-subtext-color">
                            Sign up to get started with your account
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <OAuthSocialButton
                            className="h-10 w-full flex-none"
                            logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
                            onClick={() => { /* Handle Google Sign Up */ }}
                        >
                            Sign up with Google
                        </OAuthSocialButton>
                        <div className="flex w-full items-center gap-2">
                            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
                            <span className="text-caption font-caption text-subtext-color">
                                or continue with email
                            </span>
                            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
                        </div>
                        <div className="flex w-full flex-col items-start gap-4">
                            <TextField
                                className="h-auto w-full flex-none"
                                label="Name"
                                icon="FeatherUser"
                            >
                                <TextField.Input
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </TextField>
                            <TextField
                                className="h-auto w-full flex-none"
                                label="Email"
                                icon="FeatherMail"
                            >
                                <TextField.Input
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </TextField>
                            <TextField
                                className="h-auto w-full flex-none"
                                label="Password"
                                icon="FeatherLock"
                            >
                                <TextField.Input
                                    type="password"
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </TextField>
                        </div>
                        <div className="flex w-full flex-col items-start gap-4">
                            <Button
                                className="h-10 w-full flex-none"
                                size="large"
                                onClick={() => { /* Handle sign-up logic */ }}
                            >
                                Create account
                            </Button>
                            <div className="flex w-full flex-col items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-body font-body text-subtext-color">
                                        Already have an account?
                                    </span>
                                    <LinkButton
                                        variant="brand"
                                        onClick={() => router.push("/auth/signin")}
                                    >
                                        Sign in
                                    </LinkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecureLogin;
