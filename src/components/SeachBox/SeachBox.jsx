const SeachBox = ({input,changeInput}) => {
  return (
    <div>
        <p>Find contacts by name</p>
        <input type="text" value = {input} onChange = {changeInput}/>
    </div>
  )
}

export default SeachBox