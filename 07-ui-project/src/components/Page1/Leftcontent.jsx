import Herotext from './Herotext'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between'>
      <Herotext />
      <Arrow />
    </div>
  )
}

export default Leftcontent