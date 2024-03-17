export default function Navbar(props) {
    return (
        <div style={{
            backgroundColor: 'blue',
            padding: '20px 0',
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'white'
        }}>
            <h1>{props.Title}</h1>
        </div >
    )
}