import { VscAccount } from "react-icons/vsc";
import { VscCallOutgoing } from "react-icons/vsc";
const Contact = ({name, phone,deleteContact}) => {
  return (
    <>
      <p><VscAccount />{name}</p>
      <p><VscCallOutgoing />{phone}</p>
      <button onClick = {deleteContact}>Delete</button>
      </>
  )
}

export default Contact