import React from "react";

const CommentForm = () => {
    return (
        <div className=" w-full max-w-4xl mx-auto rounded-sm my-16">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse px-0 lg:gap-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold capitalize">
                            For any ask ?
                        </h1>
                        <p className="px-4 md:px-0 mt-2 md:mt-0 py-6 text-center lg:text-left">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body px-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text capitalize">
                                        your name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text capitaliz">
                                        Your Email
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text capitaliz">
                                        Your Message
                                    </span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered"
                                    placeholder="Bio"
                                ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;
