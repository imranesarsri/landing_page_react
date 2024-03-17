export default function Border({ children }) {
    return (
        <div style={{ border: "4px blue solid", padding: '10px 20px', margin: '0 10px 10px 10px' }}>
            {children}
        </div>
    )
}
