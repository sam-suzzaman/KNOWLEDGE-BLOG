import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ChangeUserPassword = () => {
    const [showPassowrd, setShowPassword] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleFormSubmit = (data) => console.log(data);

    return (
        <>
            <div className="border-2 border-neutral rounded-md p-4">
                <h3 className="text-xl md:text-2xl capitalize font-bold text-secondary">
                    reset password
                </h3>
                <div className=" mt-16 mb-8 w-full max-w-md mx-auto shadow-md p-4 border-neutral border-2">
                    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                        {/* previous Single Input Field */}
                        <div className="form-control relative">
                            <label className="label ">
                                <span className="label-text font-normal capitalize text-base-200 text-base">
                                    previous password{" "}
                                </span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered "
                            />
                        </div>
                        {/* New Password Single Input Field */}
                        <div className="form-control relative mt-4">
                            <label className="label ">
                                <span className="label-text font-normal capitalize text-base-200 text-base">
                                    new password{" "}
                                </span>
                            </label>
                            <input
                                type={`${showPassowrd ? "text" : "password"}`}
                                placeholder="Type here"
                                className="input input-bordered "
                                {...register("newPassword", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern:
                                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/gi,
                                })}
                            />
                            {!showPassowrd ? (
                                <AiFillEye
                                    className="absolute right-2 top-14"
                                    onClick={() =>
                                        setShowPassword(!showPassowrd)
                                    }
                                />
                            ) : (
                                <AiFillEyeInvisible
                                    className="absolute right-2 top-14"
                                    onClick={() =>
                                        setShowPassword(!showPassowrd)
                                    }
                                />
                            )}
                            {errors.newPassword?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    password is required
                                </span>
                            )}
                            {errors.newPassword?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    password at least 8 character
                                </span>
                            )}
                            {errors.newPassword?.type === "maxLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    password must be in 20 character
                                </span>
                            )}
                            {errors.newPassword?.type === "pattern" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    must contain one digit and a special
                                    character
                                </span>
                            )}
                        </div>
                        {/* New Confirm Password Single Input Field */}
                        <div className="form-control relative mt-4">
                            <label className="label ">
                                <span className="label-text font-normal capitalize text-base-200 text-base">
                                    new confirm password{" "}
                                </span>
                            </label>
                            <input
                                type={`${showPassowrd ? "text" : "password"}`}
                                placeholder="Type here"
                                className="input input-bordered "
                                {...register("newConfirmPassword", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern:
                                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/gi,
                                })}
                            />
                            {!showPassowrd ? (
                                <AiFillEye
                                    className="absolute right-2 top-14"
                                    onClick={() =>
                                        setShowPassword(!showPassowrd)
                                    }
                                />
                            ) : (
                                <AiFillEyeInvisible
                                    className="absolute right-2 top-14"
                                    onClick={() =>
                                        setShowPassword(!showPassowrd)
                                    }
                                />
                            )}
                            {errors.newConfirmPassword?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    password is required
                                </span>
                            )}
                            {errors.newConfirmPassword?.type ===
                                "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    password at least 8 character
                                </span>
                            )}
                            {errors.newConfirmPassword?.type ===
                                "maxLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    password must be in 20 character
                                </span>
                            )}
                            {errors.newConfirmPassword?.type === "pattern" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    must contain one digit and a special
                                    character
                                </span>
                            )}
                        </div>
                        {/* Submit button */}
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                            >
                                reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChangeUserPassword;
