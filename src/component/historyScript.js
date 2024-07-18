let id = 0
const arrProps = []


function propsForHistory(num1,num2,operation,result) {
   id++
   const props = {num1:num1,num2:num2,operation:operation,result:result,id:id}
   arrProps.push(props)
   return props
}

export default propsForHistory
export {arrProps}
