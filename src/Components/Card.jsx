import Border from "../Sections/Border";

export default function Card({ Title, Description }) {
    return (
        <Border>
            <h2 className="text-xl font-semibold"
                style={{ borderBottom: '1px black solid', textAlign: 'center' }}>
                {Title}
            </h2>
            <p>
                {Description}
            </p>
        </Border>
    )
}
