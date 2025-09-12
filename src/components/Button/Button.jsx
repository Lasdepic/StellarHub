function MyButton({ className = "", text = "", ...props }) {
    return (
        <button id="btnComponents" className={className} {...props}>
            {text}
        </button>
    );
}

export default MyButton;
