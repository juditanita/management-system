

const ToolTips = ({text, children}) => {
  return (
    <div className="tooltip ml-2" data-tip={text}>
    <button className="btn bg-transparent shadow-none outline-none hover:bg-red-50">{children}</button>
  </div>
  )
}

export default ToolTips