import useFeedbacks from '@/hooks/useFeedbacks';
import { FC } from 'react'
import { Feedback as Mail } from '@/types/feedback';
import Icon from '@/components/Icon';

interface FeedbackProps {
  toggleFeedback: () => void;
}

const Feedback: FC<FeedbackProps> = ({toggleFeedback}) => {
  const { feedbacks, removeFeedback, error, isLoading } = useFeedbacks();
  
  if (error) return <div className="w-full text-center">Something went wrong when retrieve the feedbacks.</div>
  const handleRemove = (data: Mail) => {
    if(window.confirm("are you sure you want to delete this?")){
      removeFeedback(data);
    }
  }
  
  return (
    <div className="fixed w-full h-[100vh] overflow-hidden 
      flex flex-col justify-center z-50 bg-product">
      <div className="relative flex w-full h-[10%] justify-end pr-10">
        <div onClick={toggleFeedback} className="mt-5 cursor-pointer"><Icon icon="cross" /></div>
      </div>
      <div className="relative w-full h-[90%] flex flex-col gap-5 px-5 md:px-10 pb-10">
        <div id="mails" className="flex flex-col gap-5 px-5 md:px-16 py-20 mb-6">
          <div className="w-[full text-4xl font-medium text-left text-black">
            Feedbacks
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr className="border border-black">
                  <th className="border-r border-black text-black">Name</th>
                  <th className="border-r border-black text-black">Email</th>
                  <th className="border-r border-black text-black">Message</th>
                  <th className="border-r border-black text-black">Action</th>
                </tr>
              </thead>
              { isLoading ? (
                <tbody>Loading...</tbody>
                  ) : (
                    <tbody>
                      { feedbacks?.map((data, key) => 
                        <tr key={key} className="border border-black">
                          <td className="border-r border-black text-black">{ data.name }</td>
                          <td className="border-r border-black text-black">{ data.email }</td>
                          <td className="border-r border-black text-black">{ data.message }</td>
                          <td>
                            <span onClick={() => {handleRemove(data)}}>
                              <Icon icon="trash" />
                            </span>
                          </td>
                        </tr>
                      )}
              </tbody>
            )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback;