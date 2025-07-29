import type { card } from "../../interface"

function Card({ image, name }:card) {
    console.log(image)
    console.log(name)

  return (
    <div>Card</div>
  )
}

export default Card