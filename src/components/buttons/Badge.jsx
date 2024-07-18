

const Badge = ({text}) => {
    text = text.toLowerCase();
  return (
    <div className={`badge ${ text === "active"? "badge-secondary":"badge-primary"}`}>{text}</div>
  )
}

export default Badge