function MyButton({ className = '', text = '', ...props }) {
    return (
        <button className={className} {...props}>{text}</button>
    )
}

export default MyButton