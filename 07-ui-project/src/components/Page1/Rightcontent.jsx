import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const Rightcontent = ({ users = [] }) => {
  return (
    <div
      id='right'
      className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3 snap-x snap-mandatory scroll-smooth'
    >
      {Array.isArray(users)
        ? users.map((elem, idx) => (
            <RightCard
              key={idx}
              color={elem.color}
              id={idx}
              img={elem.img}
              tag={elem.tag}
            />
          ))
        : null}
    </div>
  )
}

export default Rightcontent