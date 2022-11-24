import * as React from "react"
import {ApplicantsDataType} from "../../../models/applicantModel";

type Props = {
  item: ApplicantsDataType | undefined
}

export const ModalContent = (props: Props) => {
  const {item} = props;
  console.log(item)

  let stringifyItem = JSON.stringify(item)
  let style = {
    backgroundColor: 'white'
  }
  return (
    <div style={style}>
    <h1>модалка куда выводятся все-все данные</h1>
      <div>{stringifyItem}</div>
    </div>
  )
}