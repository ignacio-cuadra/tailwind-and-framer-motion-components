import { motion } from "framer-motion"

const CollapsableRow = (props) => {
  const { colSpan, isExpanded, children } = props
  const height = isExpanded? 'auto' : 0
  return (
    <tr>
      <td colSpan={colSpan}>
        <motion.div
          initial = {{
            height: 0
          }}
          style={{overflow: 'hidden'}}
          animate={{height}}
          transition={{duration:.5}}
          onAnimationComplete={() => {
            
          }}
        >
          <div className="p-5 pl-10 border-b">
            {children}
          </div>
        </motion.div>
      </td>
    </tr>
  )
}

const Tr = (props) => {
  const { isExpanded = false, children = null} = props
  const processedChildren = []
  let colSpan = 0
  let tc = null
  children.forEach(child => {
    if (typeof child === 'object' && child.type.name === 'Tc') {
      tc = child
      return
    }
    if (child.type === 'td' || child.type === 'th') colSpan++
    processedChildren.push(child)
  })
  props = {...props}
  delete props.children
  delete props.isExpanded
  return (
    <>
      <tr {...props}>
        {processedChildren}
      </tr>
      {tc? <CollapsableRow colSpan = {colSpan} isExpanded = {isExpanded}>{tc}</CollapsableRow> : null}
    </>
  )
}

export default Tr