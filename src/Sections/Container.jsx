export default function ContainerFlex({ children }) {
    return (
        <div className="flex flex-row" style={{ width: '80%', margin: '20px auto' }}>
            {children}
        </div>
    )
}

export function ContainerBasis3({ children }) {
    return (
        <div className="basis-3/4">
            {children}
        </div>
    )
}

export function ContainerBasis1({ children }) {
    return (
        <div className="basis-1/4">
            {children}
        </div>
    )
}
