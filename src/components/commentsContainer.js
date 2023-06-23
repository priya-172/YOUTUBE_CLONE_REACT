import React from 'react';

const commentsData = [
  {
    name: "Priya Pramnaick",
    text: "NIce video we need more video like this",
    replies: [
      {
        name: "Priya Pramnaick",
        text: "NIce video we need more video like this",
        replies: [ {
            name: "Priya Pramnaick",
            text: "NIce video we need more video like this",
            replies: [ {
                name: "Priya Pramnaick",
                text: "NIce video we need more video like this",
                replies: [],
              },],
          },],
      },
    ],
  },
  {
    name: "Priya Pramnaick",
    text: "NIce video we need more video like this",
    replies: [
      {
        name: "Priya Pramnaick",
        text: "NIce video we need more video like this",
        replies: [],
      },
    ],
  },
  {
    name: "Priya Pramnaick",
    text: "NIce video we need more video like this",
    replies: [],
  },
  {
    name: "Priya Pramnaick",
    text: "NIce video we need more video like this",
    replies: [],
  },
  {
    name: "Priya Pramnaick",
    text: "NIce video we need more video like this",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-slate-300 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-umWad93MGg29rt6KpquK3vSQBFjT1zcXThCCSzQ&s"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList=({comments})=>{
    return(
    <div>
    {
    comments.map((comment,index)=>(
    <div>
    <Comment key={index} data={comment}/>
    <div className='pl-5 border border-l-black ml-5'>
    <CommentsList comments={comment.replies}/>
    </div>
    </div>
    ))
    }
    </div>
    )
    }
    
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;