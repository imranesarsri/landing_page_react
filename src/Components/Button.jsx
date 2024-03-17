export default function Button({ children }) {
    return (
        <button className="buttonHover" style={{
            background: 'purple',
            color: 'white',
            padding: '10px',
            margin: '5px',
            borderRadius: '10px',
        }}
        >
            {children}
        </button>
    )
}
