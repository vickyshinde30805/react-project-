import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex justify-between items-center gap-10 h-[90vh] px-18'>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content