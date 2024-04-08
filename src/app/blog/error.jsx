"use client";

const ErrorWrapper = ({ error }) => {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorWrapper;
